const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
* Implement simple binary search tree according to task description
* using Node from extensions

Конструктор класса Node, импорт из файла:
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    function addData(node, data) {
      if (!node) {
        node = new Node(data);
      }

      if (node.data > data) {
        node.left = addData(node.left, data);
      } else if (node.data < data) {
        node.right = addData(node.right, data);
      }
      return node;
    }
    return (this.rootNode = addData(this.rootNode, data));
  }

  has(data) {
    function isTreeHasValue(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      } else if (node.data > data) {
        return isTreeHasValue(node.left, data);
      } else if (node.data < data) {
        return isTreeHasValue(node.right, data);
      }
    }

    return isTreeHasValue(this.rootNode, data);
  }

  find(data) {
    function searchData(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (node.data > data) {
        return searchData(node.left, data);
      } else {
        return searchData(node.right, data);
      }
    }

    return searchData(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = remove(this.rootNode, data);

    function remove(node, data) {
      if (!node) {
        node = null;
      } else if (node.data > data) {
        node.left = remove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = remove(node.right, data);
        return node;
      }

      if (!node.right && !node.left) {
        return null;
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
      }

      let minRightValue = node.right;

      while (minRightValue.left) {
        minRightValue = minRightValue.left;
      }

      node.data = minRightValue.data;
      node.right = remove(node.right, minRightValue.data);
      return node;
    }

    return this.rootNode;
  }

  min() {
    let node;

    this.rootNode ? (node = this.rootNode) : null;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node;

    this.rootNode ? (node = this.rootNode) : null;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
