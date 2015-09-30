var base = 'http://localhost:' + (process.env.PORT || 8080) + '/test';

base += '/#checkbox';

module.exports = {
  'checkbox is visible': function(browser) {
    browser.url(base)
    .waitForElementVisible('#test', 1000)
    .end();
  }
};