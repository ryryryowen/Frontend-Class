import { LinkedList } from "./linkedList.mjs";

console.log("==== LinkedList 생성 ====");
let list = new LinkedList();

console.log("==== inserAt() 호출 ====");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);

console.log("==== printAll 호출 ====");
list.printAll();

console.log("==== clear() 호출 ====");
list.clear();
list.printAll();

console.log("==== insertLast() 호출 ====");
list.inserLast(0);
list.inserLast(1);
list.inserLast(2);
list.printAll();

console.log("==== deleteAt() 호출 ====");
list.deleteAt(0);
list.printAll();

console.log("==== deleteLast() 호출 ====");
list.deleteLast();
list.printAll();

console.log("==== insertLast() 호출 ====");
list.inserLast(2);
list.inserLast(3);
list.inserLast(4);
list.inserLast(5);
list.printAll();

console.log("==== getNodeAt() 호출 ====");
let secondeNode = list.getNodeAt(2);
console.log(secondeNode);
