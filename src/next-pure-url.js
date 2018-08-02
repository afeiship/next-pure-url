(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var PROTOCOL = '://';

  nx.pureUrl = function (inUrl) {
    if (inUrl) {
      var index = inUrl.indexOf(PROTOCOL);
      if (index > -1) {
        return inUrl.slice(index + 3);
      }
    }
    return inUrl;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pureUrl;
  }

}());
