import ArrayStack from "./01_ArrayStack";

function decimalToBinary(decimal: number): string {
  let res: string = "";
  // 1. 实例化栈结构
  const stack = new ArrayStack<number>();

  // 2. 循环存储余数
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);
    // 2.1 获取下一个除余数
    decimal = Math.floor(decimal / 2);
  }
  // 3. 获取到栈中的数据
  while (!stack.isEmpty()) {
    res += stack.pop();
  }
  return res;
}

console.log(decimalToBinary(35));
console.log(decimalToBinary(100));
