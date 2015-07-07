/*
Given a test function that takes as input a parent-node and child-node of a tree,
Count the total number of parent-child pairs in a tree that pass the test function.
*/

var Tree = function (value) {
  this.value = value === undefined ? null : value;
  this.children = null;
}

Tree.prototype.addChild = function (value) {
  if (this.children === null) this.children = [];
  var tree = new Tree(value);
  this.children.push(tree);
  return tree;
};

// Tree.prototype.print = function () {
//   console.log('------------------- Tree');

//   (function recPrint(node) {
//     console.log(node.value);
//     if (node === undefined || node.children === null) return;
//     for (var i=0; i<node.children.length; i++) {
//       recPrint(node.children[i]);
//     }
//   })(this);
// };

var test = function (parent, child) {
  // return parent.value > child.value;
  return parent.value + child.value < 3;
};

var treeTest = function (node) {

  console.log('------------------- Tree Test');
  (function recThruNodes(node) {
    // console.log(node.value);
    if (node === undefined || node.children === null) return;

    for (var i=0; i<node.children.length; i++) {
      console.log('Parent.value: ', node.value);
      console.log('Child.value: ', node.children[i].value);
      console.log('test(parent,child):', test(node, node.children[i]));
      console.log('----');
      // console.log(node.children[i]));
    }


    for (var i=0; i<node.children.length; i++) {
      recThruNodes(node.children[i]);
    }
  })(node);

};

var root = new Tree(0);
var branch1 = root.addChild(1);
var branch2 = root.addChild(2);
branch1.addChild(1.1);
branch1.addChild(1.2);
branch2.addChild(2.1);
branch2.addChild(2.2);

// root.print();
treeTest(root);
