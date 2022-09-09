const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class TreeNode { //new Node for Tree
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node 
      this.right = null; // right node 
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot; //== null ? null : this.root
  }

  add(data) {
    let newNode = new TreeNode(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      this.addNode(this.treeRoot, newNode); // helper method below
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data, node = this.treeRoot) { //inOrderTraverse
   if (this.find(data, node) != null) return true
   else return false
  }

  find(data, node = this.treeRoot) { //inOrderTraverse
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }
  removeNode(node, key)
  {
           
      // if the root is null then tree is
      // empty
      if(node === null)
          return null;
   
      // if data to be delete is less than
      // roots data then move to left subtree
      else if(key < node.data)
      {
          node.left = this.removeNode(node.left, key);
          return node;
      }
   
      // if data to be delete is greater than
      // roots data then move to right subtree
      else if(key > node.data)
      {
          node.right = this.removeNode(node.right, key);
          return node;
      }
   
      // if data is similar to the root's data
      // then delete this node
      else
      {
           // deleting node with no children
          if(node.left === null && node.right === null)
          {
              node = null;
              return node;
          }
   
          // deleting node with one children
          if(node.left === null)
          {
              node = node.right;
              return node;
          }
           
          else if(node.right === null)
          {
              node = node.left;
              return node;
          }
   
          // Deleting node with two children
          // minimum node of the right subtree
          // is stored in aux
          let aux = this.min(node.right);
          node.data = aux;
   
          node.right = this.removeNode(node.right, aux);
          return node;
      }
   
  }
  min(node = this.treeRoot) {
    if(node.left === null)
    return node.data 
else
    return this.min(node.left);
  }

  max(node = this.treeRoot) {
    if(node.right === null)
    return node.data;
else
    return this.max(node.right);
  }

}

module.exports = {
  BinarySearchTree
};