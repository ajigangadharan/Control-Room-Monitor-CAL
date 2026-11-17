const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 900, minHeight: 600,
    title: 'Control Room Video Wall Calculator',
    backgroundColor: '#0b1016',
    autoHideMenuBar: false,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.maximize();
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('file:')) { e.preventDefault(); shell.openExternal(url); } });
}

const menu = Menu.buildFromTemplate([
  { label: 'File', submenu: [
    { label: 'Print report…', accelerator: 'CmdOrCtrl+P', click: (_, w) => w && w.webContents.executeJavaScript('printReport()') },
    { type: 'separator' }, { role: 'quit', label: 'Exit' } ] },
  { label: 'View', submenu: [
    { role: 'reload' }, { type: 'separator' },
    { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { type: 'separator' }, { role: 'togglefullscreen' } ] },
  { label: 'Help', submenu: [
    { label: 'About', click: (_, w) => require('electron').dialog.showMessageBox(w, { type: 'info', title: 'About',
      message: 'Control Room Video Wall Calculator V04', detail: 'Monitor quantity, SIRA Res. 13/2025 compliance checks, wall layout and space requirement.\nWorks offline.' }) } ] }
]);

app.whenReady().then(() => { Menu.setApplicationMenu(menu); createWindow(); });
app.on('window-all-closed', () => app.quit());
