const normalize = require('./normalize-language');

let count = 0;

module.exports = (code, language) => {
  let openingTag = `<div class="code-editor"
                         id="code-block-${count++}"
                         data-language="${normalize(language)}"
                    >`;
  let closingTag = `</div>`;
  return openingTag + code + closingTag;
}
