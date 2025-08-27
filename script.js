// Node class for Huffman tree
class Node {
  constructor(char, freq, left=null, right=null) {
    this.char = char;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

// Build frequency map
function buildFrequencyMap(str) {
  const freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  return freq;
}

// Build Huffman tree
function buildHuffmanTree(freqMap) {
  const nodes = Object.entries(freqMap).map(([ch,f]) => new Node(ch,f));
  while (nodes.length > 1) {
    nodes.sort((a,b)=>a.freq-b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    nodes.push(new Node(null,left.freq+right.freq,left,right));
  }
  return nodes[0];
}

// Build Huffman codes
function buildCodes(node, prefix="", codeMap={}) {
  if(!node) return codeMap;
  if(node.char!==null) codeMap[node.char] = prefix;
  buildCodes(node.left, prefix+"0", codeMap);
  buildCodes(node.right, prefix+"1", codeMap);
  return codeMap;
}

// Encode string using Huffman codes
function encode(str, codeMap) {
  let result = "";
  for (let ch of str) result += codeMap[ch];
  return result;
}

// Convert binary string to Uint8Array
function binToUint8Array(binStr) {
  const bytes=[];
  for(let i=0;i<binStr.length;i+=8){
    bytes.push(parseInt(binStr.substr(i,8).padEnd(8,'0'),2));
  }
  return new Uint8Array(bytes);
}

// Convert Uint8Array to binary string
function uint8ArrayToBin(arr) {
  return Array.from(arr).map(b => b.toString(2).padStart(8,'0')).join('');
}

// Decode binary string using code map
function decode(binStr, codeMap) {
  const revMap = {};
  for(let ch in codeMap) revMap[codeMap[ch]] = ch;
  let result="", buffer="";
  for(let b of binStr){
    buffer+=b;
    if(revMap[buffer]){
      result+=revMap[buffer];
      buffer="";
    }
  }
  return result;
}

// Compress function
async function compress() {
  const input = document.getElementById("compressFile");
  if(input.files.length===0){ alert("Select a file"); return; }
  const file = input.files[0];
  const text = await file.text();
  document.getElementById("compressStatus").textContent = "Compressing...";

  const freqMap = buildFrequencyMap(text);
  const tree = buildHuffmanTree(freqMap);
  const codeMap = buildCodes(tree);
  const binaryStr = encode(text, codeMap);
  const compressedBytes = binToUint8Array(binaryStr);

  // Download compressed file
  const blob = new Blob([compressedBytes], {type:"application/octet-stream"});
  const a1 = document.createElement("a");
  a1.href = URL.createObjectURL(blob);
  a1.download = file.name + ".huff";
  a1.click();

  // Download key file
  const keyBlob = new Blob([JSON.stringify(codeMap)], {type:"application/json"});
  const a2 = document.createElement("a");
  a2.href = URL.createObjectURL(keyBlob);
  a2.download = file.name + ".key";
  a2.click();

  document.getElementById("compressStatus").textContent = "Compression complete! Compressed file and key downloaded.";
}

// Decompress function
async function decompress() {
  const input = document.getElementById("decompressFile");
  const keyInput = document.getElementById("keyFile");
  if(input.files.length===0 || keyInput.files.length===0){
    alert("Select compressed file and key file");
    return;
  }
  const compFile = input.files[0];
  const keyFile = keyInput.files[0];
  document.getElementById("decompressStatus").textContent = "Decompressing...";

  const compArray = new Uint8Array(await compFile.arrayBuffer());
  const binStr = uint8ArrayToBin(compArray);
  const keyText = await keyFile.text();
  const codeMap = JSON.parse(keyText);
  const originalText = decode(binStr, codeMap);

  const blob = new Blob([originalText], {type:"text/plain"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = compFile.name.replace(".huff","");
  a.click();

  document.getElementById("decompressStatus").textContent = "Decompression complete! Original file downloaded.";
}

// Add event listeners
document.getElementById("compressBtn").addEventListener("click", compress);
document.getElementById("decompressBtn").addEventListener("click", decompress);
