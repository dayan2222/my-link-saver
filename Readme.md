
# Link Saver - Chrome Extension

A simple Chrome extension that automatically saves every link you click.  
You can view your saved links anytime from the extension popup.

---

## 🚀 Features
- Automatically captures every clicked link on any website.
- Stores links locally in Chrome (`chrome.storage.local`).
- Avoids duplicate entries.
- Simple popup UI to view all saved links.
- Works on all websites.

---

## 📂 Project Structure
```

my-link-saver/
├── manifest.json      # Extension config
├── background.js      # Handles storing clicked links
├── content.js         # Detects link clicks
├── popup.html         # Popup UI
├── popup.js           # Renders saved links in popup

```

---

## 🛠️ Installation (Load in Chrome)

1. Clone or download this repository.  
2. Open Chrome and go to:  
```
chrome://extensions/
```
3. Enable **Developer mode** (top-right).  
4. Click **Load unpacked** and select the project folder (`my-link-saver`).  
5. The extension will appear in your extensions list. Pin it for quick access.  

---

## 🔄 Usage
1. Browse the web normally.  
2. Every time you click a link, it will be saved automatically.  
3. Open the extension popup to view your saved links.  
4. Click any link in the popup to revisit it.

---

## 🧩 Future Improvements
- Add search/filter for saved links.
- Export saved links as CSV/JSON.
- Sync links across devices using `chrome.storage.sync`.
- Option to save links to a custom backend (e.g., Laravel/FastAPI API).

---

## 📜 License
This project is licensed under the MIT License.  
Feel free to modify and improve it!