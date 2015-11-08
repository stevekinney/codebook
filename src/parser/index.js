const _ = require('underscore.string');

const wrap = require('./wrap-in-markup');
const normalize = require('./normalize-language');

module.exports = (text, language) => {
  return wrap(_.trim(text), normalize(language));
}
