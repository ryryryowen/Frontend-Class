// 타입구조도!!
// 모든 타입 슈퍼타입 & 서브타입
// 타입 => 타입 호환성

// let num1: number = 10;
// let num2: 10 = 10;

// num1 = num2;
// num2 = num1;

// 타입스크립트에 기본적으로 내장되어있는 내장타입 > 리터럴 타입
// 서브타입을 슈퍼타입으로 호환시키는 액션 (*업캐스팅) : 대부분 허용
// 슈퍼타입을 서브타입으로 호환시키는 액션 (*다운캐스팅) : 거의 대부분 불가

// interface Animal {
//   name: string;
//   color: string;
// }

// let animal: Animal = {
//   name: "고양이",
//   color: "white",
// };

// interface Dog {
//   name: string;
//   color: string;
//   breed: string;
// }

// let dog: Dog = {
//   name: "강아지",
//   color: "brown",
//   breed: "진돗개",
// };

// // animal은 dog보다 슈퍼타입
// // dog는 animal보다 서브타입

// animal = dog;
// // dog = animal;

// interface Book {
//   name: string;
//   price: number;
// }

// let book: Book;
// interface ProgrammingBook {
//   name: string;
//   price: number;
//   skill: string;
// }

// let programmingBook: ProgrammingBook = {
//   name: "TS",
//   price: 33000,
//   skill: "Typescript",
// };

// book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// let book3: Book = programmingBook;

// 대수타입
// 복수의 타입을 합성하거나 교차한 형태의 타입을 새롭게 만든 것
// 합집합의 형태로 타입 : union 타입
// 교집합의 형태로 타입 : intersection 타입

// 유니언 타입 사용 예제
// let a: string | number;
// a = 1;
// a = "Hello";

// // 타입 정의 (Dog, Person)
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

// // 유니언 타입으로 객체의 타입 정의
// type DogOrPerson = Dog | Person;

// // Union1: Dog 타입의 객체
// let Union1: Dog = {
//   name: "Buddy",
//   color: "Brown",
// };

// // Union2: Person 타입의 객체
// let Union2: Person = {
//   name: "Alice",
//   language: "English",
// };

// // Union3: Dog와 Person의 교차 타입 (Intersection Type)
// let Union3: Dog & Person = {
//   name: "Charlie",
//   color: "Black",
//   language: "Korean",
// };

// type Intersection = Dog & Person;

// let intersection: Intersection = {
//   name: "Charlie",
//   color: "Black",
//   language: "Korean",
// };

// interface Person01 {
//   name: string;
//   age: number;
// }

// let person01 = {} as Person01;

// person01.name = "";
// person01.age = 20;

// type Dog = {
//   name: string;
//   color: string;
// };

// let dog = {
//   name: "동후니",
//   color: "Black",
//   breed: "염티즈",
// } as Dog;

// 타입 단언은 any 다음으로 치트키!!!
// 타입 단언을 실행시키려면 반드시 다음의 조건!!
//  상호간 슈퍼 & 서브타입이어야함!!!
let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string;

let num4 = 10 as const;

// 타입가드 = 타입좁히기
const func = (value: number | string) => {
  if (typeof value === "number") {
    value.toFixed(2);
  } else if (typeof value === "string") {
    value.toUpperCase();
  }
};
