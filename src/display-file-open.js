const dialog = require('dialog');

module.exports = (browserWindow, callback) => {
  dialog.showOpenDialog(browserWindow, {
    title: 'Select a file…',
    filters: [
      { name: 'Text Documents', extensions: ['md', 'markdown', 'txt'] }
    ]
  }, callback);
};
