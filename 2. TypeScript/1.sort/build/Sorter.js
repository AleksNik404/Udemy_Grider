"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
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
exports.Sorter = Sorter;
