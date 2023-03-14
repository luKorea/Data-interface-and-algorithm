import type { IStack } from "./IStack";
/**
 * @description 栈 --> 先进后出
 */

class ArrayStack<T> implements IStack<T> {
  private data: T[] = [];
  /**
   * @description 添加一个新元素到栈顶
   * @returns
   */
  push(item: T): void {
    this.data.push(item);
  }

  /**
   * @description  移除栈顶的元素, 同时返回被移除的元素
   * @returns
   */
  pop(): T | undefined {
    return this.data.pop();
  }
  /**
   * @description 返回栈顶元素
   * @returns
   */
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  /**
   * @description 判断栈里是否还有元素
   * @returns
   */
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  /**
   * @description 返回栈的元素个数
   * @returns
   */
  size(): number {
    return this.data.length;
  }
}

const stack = new ArrayStack<string>();
stack.push("abc");
stack.push("demo");
stack.push("test");

// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.size());

export default ArrayStack;

export {};
