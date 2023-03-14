export interface IStack<T> {
  push(element: T): void;
  peek(): T | undefined;
  pop(): T | undefined;
  size(): number;
  isEmpty(): boolean;
}
