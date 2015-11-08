'use strict';

const assert = require('assert');

const parse = require('../src/parser');
const wrapInMarkup = require('../src/parser/wrap-in-markup');

describe('wrapInMarkup', () => {

  it('should begin with a <div> tag', () => {
    assert.equal(wrapInMarkup('console.log(123);').slice(0,4), '<div')
  });

  it('should end with a </div> tag', () => {
    assert.equal(wrapInMarkup('console.log(123);').slice(-5), '/div>')
  });

  it('should include the "code-editor" class', () => {
    assert(wrapInMarkup('console.log(123);').includes('class="code-editor"'));
  });

  it('should include an id prefixed with "code-block"', () => {
    assert(wrapInMarkup('console.log(123);').includes('id="code-block-'));
  });

  it('should take a language argument & add that to a data attribute', () => {
    assert(wrapInMarkup('console.log(123);', 'javascript')
                        .includes('data-language="javascript"'));
  });

  it('should use "javascript" when given "js"', () => {
    assert(wrapInMarkup('console.log(123);', 'js')
                        .includes('data-language="javascript"'));
  });

  it('should use "ruby" when given "rb"', () => {
    assert(wrapInMarkup('puts 123', 'rb')
                        .includes('data-language="ruby"'));
  });

});
