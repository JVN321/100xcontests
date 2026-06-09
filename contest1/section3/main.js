// Q1
// const fs = require("node:fs");

// fs.readFile("user.json", "utf-8", function (e, data) {
//   let strdata = "";
//   let jdata = JSON.parse(data);
//   console.log(jdata);
//   for (let i = 0; i < jdata.length; i++) {
//     strdata = strdata.concat(jdata[i].email, "\n");
//   }
//   console.log(strdata);
//   fs.writeFile("email.txt", strdata, function (e, data) {});
// });

//Q2
// const fs = require("node:fs");

// function findmarks(jdata) {
//   let high = -1;
//   let low = -1;
//   let sum = 0;
//   for (let i = 0; i < jdata.length; i++) {
//     if (low == -1) {
//       high = low = jdata[i].marks;
//     }
//     if (jdata[i].marks < low) {
//       low = jdata[i].marks;
//     }
//     if (jdata[i].marks > high) {
//       high = jdata[i].marks;
//     }
//     sum += jdata[i].marks;
//   }
//   let average = sum / jdata.length;

//   let strdata =
//     "Highest:" +
//     high.toString() +
//     "\nLowest:" +
//     low.toString() +
//     "\nAverage" +
//     average.toString() +
//     "\n";
//   return strdata;
// }

// fs.readFile("marks.json", "utf-8", function (e, data) {
//   let strdata = "";
//   let jdata = JSON.parse(data);

//   strdata = findmarks(jdata);
//   console.log(strdata);
//   fs.writeFile("report.txt", strdata, function (e, data) {});
// });

//Q3
//

// const fs = require("node:fs");

// fs.readFile("events.txt", "utf-8", (e, data) => {
//   count = {};
//   events = data.split("\n");
//   for (i in events) {
//     if (events[i] == "") continue;
//     if (count[events[i]] == undefined) count[events[i]] = 1;
//     else count[events[i]] += 1;
//   }
//   strdata = "";
//   for (i in count) {
//     strdata += i + ":" + count[i].toString() + "\n";
//   }
//   fs.writeFile("analytics.txt", strdata, function (e, data) {});
//   console.log(count);
// });

//Q4
// const fs = require("node:fs");

// fs.readFile("message.txt", "utf-8", function (e, data) {
//   let upper = data.toUpperCase();

//   fs.writeFile("uppercase.txt", upper, function (e) {
//     fs.readFile("uppercase.txt", "utf-8", function (e, data) {
//       fs.writeFile(
//         "summary.txt",
//         data.split(" ").length.toString() + "\n",
//         function (e) {},
//       );
//     });
//   });
// });

//Q5
//
const fs = require("node:fs");
let students, marks;

fs.readFile("students.json", "utf-8", function (e, data) {
  students = JSON.parse(data);
  fs.readFile("marks.json", "utf-8", function (e, data) {
    marks = JSON.parse(data);
    let str = "";
    for (let i = 0; i < students.length; i++) {
      for (let j = 0; j < marks.length; j++) {
        if (students[i].id === marks[j].id) {
          str += students[i].name + " - " + marks[j].marks + "\n";
        }
      }
    }
    console.log(str);
    fs.writeFile("report.txt", str, function (e, data) {});
  });
});
