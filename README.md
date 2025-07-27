# 🗜️ Huffman Coding CLI Tool

A Command Line Interface (CLI) tool for **file compression and decompression** using the Huffman Coding algorithm. This tool allows efficient file size reduction by encoding text files into binary data with minimal storage.

## 📌 Features

- ✅ Compress any plain text file using Huffman Encoding  
- ✅ Decompress a `.huff` file back to the original text  
- ✅ Displays compression ratio and statistics  
- ✅ CLI-based interface for easy usage  
- ✅ Cross-platform support (Windows, Linux, macOS)

---

## 🚀 How It Works

1. **Compression**:
   - Reads the input file
   - Calculates frequency of characters
   - Builds a Huffman tree
   - Encodes content into binary and writes to `.huff` file
   - Saves the Huffman tree for decompression

2. **Decompression**:
   - Reads the encoded binary data and the saved tree
   - Reconstructs the original file using the Huffman tree

---

## 🧑‍💻 Usage

### 🔧 Build (C++ example)

```bash
g++ huffman.cpp -o huff
