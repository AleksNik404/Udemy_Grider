import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }
}

const attrs = new Attributes<UserProps>({ id: 5, name: 'adsf', age: 20 });

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');

// const attrs = new Attributes<UserProps>({ id: 5, name: 'adsf', age: 20 });
// const id: number = attrs.get('id') as number;
