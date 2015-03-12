var wd = require('wd'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    uuid = require('uuid-js');

var VARS = {};

// This assumes that selenium is running at http://127.0.0.1:4444/wd/hub/
var noop = function() {},
    b = wd.remote();

describe('Selenium Test Case', function() {

  this.timeout(60000);

  it('should execute test case without errors', function(done) {

    b.chain(function(err) {
      done(err);
    })
    .init({
      browserName: 'firefox'
    })
    .get("http://qa.h2-atkins.com/client/login/")
    .elementByCssSelector("form > button", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByName("username", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "jsellers", noop);
      });
    })
    .elementByXPath("//div[@id='login-inputs']/input[2]", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "password", noop);
      });
    })
    .elementByXPath("//div[@id='login-button']//button[.='Login']", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("form > button", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("div.flip-to-back", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("div.input > div.form-group", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByName("weight", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByName("weight", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "123", noop);
      });
    })
    .elementByName("goal", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "123", noop);
      });
    })
    .elementByXPath("//div[@id='weight']//button[.='Done']", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("div.add", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("#steps > div.card > div.front > div.tile-header > div.flip-to-back", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByName("steps", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "123", noop);
      });
    })
    .elementByCssSelector("form[name=\"stepsForm\"] > div.input > div.form-group.last > input[name=\"goal\"]", function(err, el) {
      b.next('clear', el, function(err) {
        b.next('type', el, "123", noop);
      });
    })
    .elementByXPath("//div[@id='steps']//button[.='Done']", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("span.ng-binding", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("span.ng-binding", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .elementByCssSelector("span.ng-binding", function(err, el) {
      b.next('clickElement', el, noop);
    })
    .close(function(err) {
      done(err);
    });

  });
});

afterEach(function() {
  b.quit();
});
