`use strict`;

class Stack {
  constructor(stackElemCountMax = 10) {
    if (Number.isInteger(stackElemCountMax)) {
      this.stackElemCountMax = stackElemCountMax;
    } else {
      throw new Error(`Stack volume is invalid number!`);
    }

    this.stack = [];
    this.stackHead = null;
  }

  push(elem) {
    if (this.stack.length < this.stackElemCountMax) {
      this.stack.push(elem);
      this.stackHead = this.peek();
    } else {
      throw new Error(`Stack is full!`);
    }
  }

  pop() {
    if (this.stack.length) {
      let lastElem = this.stack.pop();
      this.stackHead = this.peek();
      return lastElem;
    } else {
      throw new Error(`Stack is empty!`);
    }
  }

  peek() {
    this.stackHead = this.stack.length ? this.stack[this.stack.length - 1] : null;
    return this.stackHead;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  toArray() {
    let stackCopy = [];
    let tempStack = [];
    while (this.stack.length) {
      tempStack.push(this.peek());
      stackCopy.push(this.pop());
    }

    while (tempStack.length) {
      this.push(tempStack.pop());
    }
    tempStack = null;
    return stackCopy;
  }

  static fromIterable(iterable) {
    const iterator = iterable[Symbol.iterator];
    if (iterator) {
      let newStack = new this(iterable.length);
      for (const iterableItem of iterable) {
        newStack.push(iterableItem);
      }
      return newStack;
    } else {
      throw new Error(`${iterable} is not iterable!`);
    }
  }
}
