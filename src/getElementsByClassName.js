// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*
var htmlStrings = [
  '<div class="targetClassName"></div>',
  '<div class="otherClassName targetClassName"></div>',
  '<div><div class="targetClassName"></div></div>',
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
  '<div><div></div><div><div class="targetClassName"></div></div></div>',
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName');
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
*/
var getElementsByClassName = function(className, node) {
  // your code here
  var nodeList = [];
  node = node || document.body;
  var nameClass = node.className.split(' ');
  if (nameClass.indexOf(className) !== -1) {
    nodeList.push(node);
  }
  // function search(node) {
  //   if (_(node.classList).contains(className)) {
  //     nodeList.push(node);
  //   }
  //   _(node.childNodes).forEach(function(child) {
  //     search(child);
  //   });
  // }
  // search(document.body);
  for (var i = 0; i < node.children.length; i++) {
    var childResults = getElementsByClassName(className, node.children[i]);
    nodeList = nodeList.concat(childResults);
  }
  return nodeList;
};
