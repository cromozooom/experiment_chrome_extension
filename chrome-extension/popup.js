function shortcutManager() {
  return {
    newShortcut: "",
    shortcuts: [],
    init() {
      chrome.storage.sync.get(["shortcuts"], (result) => {
        this.shortcuts = result.shortcuts || [];
      });
    },
    addShortcut() {
      if (this.newShortcut.trim() === "") return;
      this.shortcuts.push(this.newShortcut.trim());
      this.newShortcut = "";
      this.saveShortcuts();
    },
    removeShortcut(shortcut) {
      this.shortcuts = this.shortcuts.filter((s) => s !== shortcut);
      this.saveShortcuts();
    },
    saveShortcuts() {
      chrome.storage.sync.set({ shortcuts: this.shortcuts });
    },
  };
}
