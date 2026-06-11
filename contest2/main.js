// Q1

// const students = [
//   { name: "Aman", marks: 78 },
//   { name: "Riya", marks: 91 },
//   { name: "Kabir", marks: 65 },
// ];

// console.log(
//   students.map((a) => {
//     let b = {};
//     b.name = a.name.toUpperCase();
//     b.marks = a.marks >= 90 ? "A" : a.marks >= 70 ? "B" : "C";
//     return b;
//   }),
// );

//Q2
//
// const products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 500 },
//   { name: "Monitor", price: 15000 },
//   { name: "Keyboard", price: 1200 },
// ];

// console.log(products.filter((x) => x.price > 5000));

//Q3
// //
// const users = [
//   { id: 1, email: "a@test.com" },
//   { id: 2, email: "b@test.com" },
//   { id: 3, email: "a@test.com" },
//   { id: 4, email: "c@test.com" },
// ];

// let knownmails = new Set();
// let dup = {};
// console.log(
//   users.filter((x) => {
//     if (!knownmails.has(x.email)) {
//       knownmails.add(x.email);
//     } else {
//       return 1;
//     }
//   }),
// );

//Q4
// //
// const students = [
//   { name: "A", branch: "CSE" },
//   { name: "B", branch: "ECE" },
//   { name: "C", branch: "CSE" },
//   { name: "D", branch: "ME" },
// ];

// var branchs = {};
// for (let i in students) {
//   i = students[i];
//   if (branchs[i.branch] != undefined) {
//     branchs[i.branch].push(i.name);
//   } else {
//     branchs[i.branch] = [i.name];
//   }
// }
// console.log(branchs);

//Q5
//
// const users = [
//   {
//     name: "Aman",
//     orders: ["Laptop", "Mouse"],
//   },
//   {
//     name: "Riya",
//     orders: ["Keyboard"],
//   },
// ];

// let orders = [];
// for (let i in users) {
//   orders.push(users[i].orders);
// }

// console.log(orders.flat())
// Q6
//

// const orders = ["Laptop", "Mouse", "Laptop", "Keyboard", "Laptop", "Mouse"];

// let ordersCount = {};

// for (let i in orders) {
//   i = orders[i];
//   if (ordersCount[i] == undefined) {
//     ordersCount[i] = 1;
//     continue;
//   }
//   ordersCount[i]++;
// }

// let max = undefined;
// let maxName;
// for (let count in ordersCount) {
//   if (max == undefined) {
//     max = ordersCount[count];
//     maxName = count;
//   }
//   if (ordersCount[count] >= max) {
//     max = ordersCount[count];
//     maxName = count;
//   }
// }

// console.log({ name: maxName, count: max });

// Q7
//
// const users = [
//   {
//     name: "Aman",
//     posts: [
//       { title: "JS", likes: 50 },
//       { title: "React", likes: 10 },
//     ],
//   },
//   {
//     name: "Riya",
//     posts: [{ title: "Node", likes: 80 }],
//   },
// ];

// newusers = [];
// users.forEach((x) => {
//   for (let i in x.posts) {
//     if (x.posts[i].likes > 40) {
//       newusers.push(x.name);
//       break;
//     }
//   }
// });

// console.log(newusers);

//Q8
//

// import { readFile } from "node:fs";

// readFile("a.txt", "utf-8", (e, data) => {
//   let lines = data.split("\n");
//   let words = 0;
//   for (let e in lines) {
//     words += lines[e].split(" ").length;
//   }
//   console.log({
//     lines: lines.length,
//     words: words,
//     characters: data.length - 1,
//   });
// });
//
//Q9
//

// import { readFile } from "node:fs";
// import { writeFile } from "node:fs";

// readFile("user1.json", "utf-8", (e, data) => {
//   readFile("user2.json", "utf-8", (e2, data2) => {
//     let arr = JSON.parse(data);
//     let arr2 = JSON.parse(data2);
//     arr.push(...arr2);
//     console.log(arr);
//     writeFile("merged.txt", JSON.stringify(arr), function () {});
//   });
// });

//Q10
//
// const transactions = [
//   { user: "Aman", type: "credit", amount: 1000 },
//   { user: "Aman", type: "debit", amount: 200 },
//   { user: "Riya", type: "credit", amount: 500 },
//   { user: "Riya", type: "debit", amount: 100 },
// ];
// let summary = {};

// transactions.forEach((x) => {
//   if (!summary[x.user]) {
//     summary[x.user] = 0;
//   }
//   summary[x.user] += x.type == "debit" ? -x.amount : x.amount;
// });
// console.log(summary);

//Debugging
// const nums = [1, 2, 3, 4];

// constresult = nums.map((num) => {
//   return num * 2;
// });

// console.log(constresult);
//  import { readFile, writeFile } from "node:fs/promises";

// readFile("a.txt", "utf-8").then((data) => {
//   readFile("b.txt", "utf-8").then((data1) => {
//     readFile("c.txt", "utf-8").then((data2) => {
//       console.log(data + data1 + data2);
//       writeFile("d.txt", data + data1 + data2);
//     });
//   });
// });

// import { readFile, writeFile } from "node:fs/promises";

// async function main() {
//   let data = await readFile("a.txt", "utf-8");
//   let data1 = await readFile("b.txt", "utf-8");
//   let data2 = await readFile("c.txt", "utf-8");
//   console.log(data + data1 + data2);
//   await writeFile("d.txt", data + data1 + data2);
// }
// main();
