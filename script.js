import getPromise from './Tasks/task-1.js';
import add from './Tasks/task-2.js';
import take from './Tasks/task-4.js';
import accountPatients from './Tasks/task-5.js';
import checkAdult from './Tasks/task-6.js';

// !Task-1
console.log(getPromise(1000, 'message'));

// !Task-2
console.log(add(1, 0));

// !Task-4
const arr = ['a', 'b', 'c', 'd'];
for (const x of take(2, arr)) {
  console.log(x);
}

// !Task-5
const [admit, discharge] = accountPatients(100);
admit();
admit();
discharge();

// !Task-6
checkAdult(15); // Error Access denied - you are too young!
// Age verification complete

checkAdult(25); // Access allowed
// Age verification complete
