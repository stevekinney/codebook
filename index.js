'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const dialog = require('dialog');

require('crash-reporter').start();

let mainWindow = null;

app.on('ready', () => {
  require('electron-compile').init();

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadUrl('file://' + __dirname + '/lib/index.html');
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') { app.quit(); }
});
