const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.branch ? this.branch : this.branch = null;
  }

  add(data) {
      function addData(node, data) {
        if (!node) {
          node =  new Node(data);
        } else if (node.data === data) {
          node = node;
        } else if (node.data > data) {
          node.left = addData(node.left, data);
        } else {
          node.rigth = addData(node.rigth, data);
        }
        return node;
      }
      this.branch = addData(this.branch, data)
    }

  has(data) {
    function search(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (node.data > data) {
        return search(node.left, data);
      } else {
        return search(node.rigth, data);
      }
    }
    return search(this.branch, data)
  }

  find(data) {
    function search(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (node.data > data) {
        return search(node.left, data);
      } else {
        return search(node.rigth, data);
      }
    }
    return search(this.branch, data)
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
      let minRigth = node.rigth;
      while (minRigth.left) {
        minRigth = minRigth.left;
      }
      node.data = minRigth.data;
      node.rigth = remove(node.rigth, minRigth.data)
      return node;
    }
    return remove(this.branch, data);
  }

  min() {
    let node;
    this.branch ? node = this.branch : null;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node;
    this.branch ? node = this.branch : null;
    while (node.rigth) {
      node = node.rigth;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};