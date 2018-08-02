var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pure-url');

describe('next/pureUrl', function () {

  it('nx.pureUrl: www.baidu.com', function () {
    var str = 'www.baidu.com';
    var dist = nx.pureUrl(str);

    assert.equal(dist, 'www.baidu.com');
  });

  it('nx.pureUrl: https://www.baidu.com/test.php', function () {
    var str = 'https://www.baidu.com/test.php';
    var dist = nx.pureUrl(str);

    assert.equal(dist, 'www.baidu.com/test.php');
  });


  it('nx.pureUrl: http://www.baidu.com/test.php', function () {
    var str = 'http://www.baidu.com/test.php';
    var dist = nx.pureUrl(str);

    assert.equal(dist, 'www.baidu.com/test.php');
  });

});
