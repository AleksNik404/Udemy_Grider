interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    let { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //// Check is array
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }

        // if (this.collection[j] > this.collection[j + 1]) {
        //   // prettier-ignore
        //   [this.collection[j], this.collection[j + 1]] = [this.collection[j + 1], this.collection[j]];
        // }
      }
    }
  }
}
