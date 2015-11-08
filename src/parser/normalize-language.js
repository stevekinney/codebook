const languages = require('./languages');

module.exports = (language) => {
  return languages[language] ? languages[language] : language || 'javascript';
}
