const assert = require('power-assert');
const Nightmare = require('nightmare');
const repeat = require('lodash.repeat');

const nightmare = Nightmare({ show: true });
const MESSAGE = repeat('0123456789', 100);

require('mocha-generators').install();

describe('nightmare', function() {
  it('can type a long string into a textarea', function*() {
    const message = yield nightmare
      .goto('http://localhost:3000/')
      .type('[name="message"]', MESSAGE)
      .click('[type="submit"]')
      .wait('.message')
      .evaluate(function() {
        return document.querySelector('.message').textContent;
      });

    assert(message === MESSAGE);

    yield nightmare.end();
  });
});
