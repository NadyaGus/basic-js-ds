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

  root() {
    return this.node ? this.node : (this.node = null);
  }

  add(data) {
    function addData(node, data) {
      if (!node) {
        node = new Node(data);
      }
      if (node.data === data) {
        node = node;
      } else if (node.data > data) {
        node.left = addData(node.left, data);
      } else if (node.data < data) {
        node.rigth = addData(node.rigth, data);
      }
      return node;
    }
    return (this.node = addData(this.node, data));
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
        return isTreeHasValue(node.rigth, data);
      }
    }
    return isTreeHasValue(this.node, data);
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
        return searchData(node.rigth, data);
      }
    }

    return searchData(this.node, data);
  }

  remove(data) {
    function remove(node, data) {
      if (!node) {
        node = null;
      } else if (node.data > data) {
        node.left = remove(node.left, data);
        return node;
      } else if (node.data < data) {
        node.rigth = remove(node.rigth, data);
        return node;
      } else {
        if (!node.rigth && !node.left) {
          return null;
        }
      }

      if (!node.left) {
        node = node.rigth;
        return node;
      } else if (!node.rigth) {
        node = node.left;
        return node;
      }

      let minRigthValue = node.rigth;

      while (minRigthValue.left) {
        minRigthValue = minRigthValue.left;
      }

      node.data = minRigthValue.data;
      node.rigth = remove(node.rigth, minRigthValue.data);
      return node;
    }
    return remove(this.node, data);
  }

  min() {
    let node;

    this.node ? (node = this.node) : null;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    let node;

    this.node ? (node = this.node) : null;
    while (node.rigth) {
      node = node.rigth;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
