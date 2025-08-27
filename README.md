# 🌟 Zipp Huff

![HTML5](https://img.shields.io/badge/HTML5-orange) 
![CSS3](https://img.shields.io/badge/CSS3-blue) 
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

**Zipp Huff** is a **lightweight, browser-based utility** for **Huffman coding-based file compression and decompression**.  
Everything runs **client-side**, keeping your data private.  
No uploads, no servers — just your browser 🚀.

---

## 🚀 Features

- 📦 **Compress files using Huffman coding**  
- 🔓 **Decompress using a secure key file**  
- 🧠 **100% client-side & privacy-safe**  
- 📁 **Supports any file type** (Text, images, binaries, etc.)  
- 🖥️ **No installation required** — just open `index.html`  

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5      | Structure & UI |
| CSS3       | Styling & layout |
| JavaScript | Huffman compression/decompression logic |

---

## 📂 Project Structure

```plaintext
ZippHuff/
│
├── index.html        # Main web interface
├── style.css         # Stylesheet for the UI
├── script.js         # Core logic for Huffman compression/decompression
├── screenshots/      # Folder for screenshots
│   ├── compress.png
│   └── decompress.png
└── README.md         # Project documentation
```

---

## 💾 Compress File

Select a file and click **Compress** to generate:  
- `.huff` — compressed file.  
- `.key` — Huffman tree key for decoding.

---

## 🔄 Decompress File

Upload the `.huff` file and `.key` file to restore the original file.

---

### ✅ Compress a File

<div style="display: flex; align-items: center; justify-content: space-between;">

<div style="flex: 1; padding-right: 1em;">
1. Open `index.html` in your browser.  
2. Navigate to the **Compress a File** section.  
3. Click **Choose File** and select your file.  
4. Click **Compress**.  
5. Download `.huff` and `.key` files.
</div>

<div style="flex: 1;">
<img src="screenshots/compress.png" alt="Compress Screenshot" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;">
</div>

</div>

---

### 🔓 Decompress a File

<div style="display: flex; align-items: center; justify-content: space-between;">

<div style="flex: 1; padding-right: 1em;">
1. Scroll to **Decompress a File** section.  
2. Upload the `.huff` and corresponding `.key` file.  
3. Click **Decompress**.  
4. Download the restored original file.
</div>

<div style="flex: 1;">
<img src="screenshots/decompress.png" alt="Decompress Screenshot" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 4px;">
</div>

</div>

---

## 🧪 How Huffman Coding Works

Huffman coding is a lossless compression algorithm that assigns shorter codes to frequent characters.

### 🔹 Steps

- Frequency Analysis: Counts each character’s frequency.  
- Build Priority Queue: Nodes ordered by frequency.  
- Build Huffman Tree: Merge lowest-frequency nodes iteratively.  
- Assign Binary Codes: Left edge = 0, right edge = 1.  
- Encode File: Replace characters with codes.  
- Store Tree: Save codes in `.key` file for decompression.

---

## 📊 Example Table

| Character | Frequency | Code |
|-----------|-----------|------|
| A         | 5         | 0    |
| B         | 2         | 10   |
| C         | 1         | 110  |
| D         | 1         | 111  |

_Example Encoding:_  
`ABCD` → `010110111` (compressed binary)

---

## 📋 Important Notes

- ⚠️ The `.key` file is essential — without it, `.huff` cannot be decompressed.  
- 💾 Compression is lossless, so no data is lost.  
- 🌐 All processing happens client-side; no files are uploaded.

