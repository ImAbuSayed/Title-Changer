
# Chrome Title Changer


A simple yet powerful Chrome extension that allows you to customize website titles temporarily or permanently. Perfect for organizing your browser tabs and creating personalized web experiences.

## 🌟 Features

* 🔄 Change website titles on the fly
* ⚡ Apply changes temporarily (this session only)
* 💾 Save title changes permanently for specific domains
* 🎯 Simple and intuitive user interface
* 🚀 Lightweight and fast performance
* 🔒 Secure with minimal permissions

## 📥 Installation

### From Chrome Web Store

1. Visit the Chrome Web Store (link coming soon)
2. Click "Add to Chrome"
3. Confirm the installation

### Manual Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked"
5. Select the extension directory

## 🎮 How to Use

1. Click the extension icon in your Chrome toolbar
2. Enter your desired title for the current website
3. Choose your preference:
   * "This time only" - Changes title temporarily
   * "Always" - Saves the title change for that domain

## 🛠️ Technical Details

### Files Structure

<pre><div class="relative flex flex-col rounded-lg"><div class="text-text-300 absolute pl-3 pt-2.5 text-xs"></div><div class="pointer-events-none sticky my-0.5 ml-0.5 flex items-center justify-end px-1.5 py-1 mix-blend-luminosity top-0"><div class="from-bg-300/90 to-bg-300/70 pointer-events-auto rounded-md bg-gradient-to-b p-0.5 backdrop-blur-md"><button class="flex flex-row items-center gap-1 rounded-md p-1 py-0.5 text-xs transition-opacity delay-100 hover:bg-bg-200 opacity-60 hover:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 256 256" class="text-text-500 mr-px -translate-y-[0.5px]"><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path></svg><span class="text-text-200 pr-0.5">Copy</span></button></div></div><div><div class="code-block__code !my-0 !rounded-lg !text-sm !leading-relaxed"><code><span><span>chrome-title-changer/
</span></span><span>├── manifest.json
</span><span>├── popup.html
</span><span>├── popup.js
</span><span>├── background.js
</span><span>├── icon48.png
</span><span>└── icon128.png</span></code></div></div></div></pre>

### Permissions Used

* `storage` - For saving permanent title preferences
* `activeTab` - For accessing current tab information
* `scripting` - For modifying page titles

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Abu Sayed**

* Website: [abusayed.com.bd](https://abusayed.com.bd)
* GitHub: [@ImAbuSayed](https://github.com/ImAbuSayed)
