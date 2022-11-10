class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c', 'd']);

// Examples of generics with functions

function printStrings(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

function printNumbers(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

printAnything(['a', 'b', 'c', 'd']);

// // // // // // //

class Car {
  print() {
    console.log('car');
  }
}

class House {
  print() {
    console.log('house');
  }
}

interface Printable {
  print(): void;
}

function printHousesofCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
