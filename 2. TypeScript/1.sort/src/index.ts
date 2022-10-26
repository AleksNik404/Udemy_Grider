import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// //NUmbers
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();

// Strings
const charactersCollection = new CharactersCollection('Xaalaret');
charactersCollection.sort();

// // Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.print();
linkedList.sort();
linkedList.print();
