import ArrayStack from "./01_ArrayStack";

function isValid(str: string): boolean {
  const stack = new ArrayStack<string>();
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    switch (item) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (item !== stack.pop()) return false;
        break;
    }
  }
  return stack.isEmpty();
}

function isValidArray(str: string): boolean {
  const array: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    switch (item) {
      case "(":
        array.push(")");
        break;
      case "{":
        array.push("}");
        break;
      case "[":
        array.push("]");
        break;
      default:
        if (item !== array.pop()) return false;
        break;
    }
  }
  return !array.length;
}

console.log(isValid("({}){}[]"));
console.log(isValid("({}){}[]("));
console.log(isValid("({)}{}[]"));

console.log(isValidArray("({}){}[]"));
console.log(isValidArray("({}){}[]("));
console.log(isValidArray("({)}{}[]"));
