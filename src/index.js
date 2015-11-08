const fs = require('fs');
const remote = require('remote');

const marked = require('marked');
const $ = require('jquery');

const convertCodeBlocks = require('../src/parser');

const displayFileOpenDialog = remote.require('./src/display-file-open.js');
const currentWindow = remote.getCurrentWindow();

fs.readFile('/Users/stevekinney/Desktop/wowow.md', (err, markdown) => {
  marked(markdown.toString(), (err, markup) => {

    $('.content').html(markup);

    $('pre').replaceWith(function () {
      let text = this.textContent;
      let language = this.firstChild.classList[0].slice(-2);
      return convertCodeBlocks(text, language);
    });

    $('.code-editor').each((index, element) => {
      let id = element.id;
      let editor = ace.edit(id);
      let language = element.dataset.language;

      editor.setTheme('ace/theme/monokai');
      editor.getSession().setMode(`ace/mode/${language}`);
    });

  });
});
