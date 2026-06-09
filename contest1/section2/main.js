// Q1

// A = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 },
// ];

// let sums = {};
// let sum = 0;
// for (let i = 0; i < A.length; i++) {
//   if (sums[A[i].user] == undefined) {
//     sums[A[i].user] = A[i].amount;
//   }
//    else{
//   sums[A[i].user] += A[i].amount;
//    }
// }
// console.log(sums);

// Q2

// A = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// B = {};

// for (let i = 0; i < A.length; i++) {
//   B[A[i].id] = A[i].name;
// }
// console.log(B);

//Q3
//

// A = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// B = {};

// for (let i in A) {
//   if (!(A[i] == undefined || A[i] == null)) {
//     B[i] = A[i];
//   }
// }
// console.log(B);

//Q4
//
// roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
// ((checkRole = "user"), (action = "write"));

// console.log(action in roles[checkRole] ? true : false);

//Q5

// let A = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 },
// ];

// let sums = {};
// let sum = 0;
// for (let i = 0; i < A.length; i++) {
//   if (sums[A[i].category] == undefined) {
//     sums[A[i].category] = A[i].price;
//   } else {
//     sums[A[i].category] += A[i].price;
//   }
// }
// console.log(sums);

//Q6
//

// A = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
// ];
// B = [];

// for (let i = 0; i < A.length; i++) {
//   let x = 1;
//   for (let j = 0; j < B.length; j++) {
//     if (B[j].id == A[i].id) {
//       x = 0;
//       break;
//     }
//   }
//   if (x) B.push(A[i]);
// }
// console.log(B);

//Q7
//

// let A = {
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" },
// };

// let B = {};

// for (let i in A) {
//   for (let j in A[i]) {
//     B[j] = {};
//   }
// }
// for (let i in A) {
//   for (let j in A[i]) {
//     B[j][i] = A[i][j];
//   }
// }

// console.log(B);

//Q8
//

// let A = [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" },
// ];
// let B = {};
// for (let i = 0; i < A.length; i++) {
//   let fruit = A[i].category;
//   if (B[fruit] == undefined) B[fruit] = [A[i].id];
//   else B[fruit].push(A[i].id);
// }

// console.log(B);

//Q9
//

// let A = { a: { x: 1, y: 2 } };
// let B = { a: { x: 1, y: 2 } };
// let equal = 1;
// for (let i in A) {
//   for (let j in A[i]) {
//     if (A[i][j] != B[i][j]) {
//       equal = 0;
//       break;
//     }
//   }
// }
// console.log(equal ? true : false);

//Q10
//
// A = { a: [1, [2, [3]]], b: [4, [5]] };

// for (let i in A) {
//   A[i] = A[i].flat().flat();
// }
// console.log(A);

//Q11
//A = { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] };
// count = {};
// for (i in A) {
//   for (let j = 0; j < A[i].length; j++) {
//     let fruit = A[i][j];
//     if (count[fruit] == undefined) count[fruit] = 1;
//     else count[fruit] += 1;
//   }
// }

// let max = -1;
// for (i in count) {
//   if (max == -1) {
//     max = i;
//   } else {
//     if (max < count[i]) {
//       max = i;
//     }
//   }
// }
// console.log(max);

//Q12
//

// A = { a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] };
// B = new Set();
// C = -1;

// for (i in A) {
//   D = new Set(A[i]);
//   if (C == -1) {
//     B = D;
//     C = 0;
//   } else {
//     B = B.intersection(D);
//   }
// }

// console.log(B);

//Q13
//
// function merge(A, C) {}
// A = { a: { x: 1, y: 2 } };
// C = { a: { y: 3, z: 4 } };

// for (i in A) {
//   for (j in A[i]) {
//     if (C[i] == undefined) {
//       C[i] = {};
//     }
//     C[i][j] = A[i][j];
//   }
// }
// console.log(C);

//Q15
//
// A = { a: 10, b: 20 };
// C = { a: 5, c: 15 };

// for (i in A) {
//   if (C[i] == undefined) {
//     C[i] = A[i];
//   }
// }
// console.log(C);
