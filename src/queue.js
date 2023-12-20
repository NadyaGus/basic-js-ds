const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 *
 * class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.length) {
      const node = new ListNode(value);
      this.head = node;
    } else {
      let currentValue = this.head;

      while (currentValue.next !== null) {
        currentValue = currentValue.next;
      }
      currentValue.next = new ListNode(value);
    }
    this.length += 1;
  }

  dequeue() {
    const firstValue = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return firstValue;
  }
}

module.exports = {
  Queue,
};
