const fs = require("fs");
// import fs from "fs";
console.log(process.cwd());
const content = fs.readFile(
  "./01-async-js/easy/3-read-from-file.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  }
);
// content.then((res) => console.log(res)).catch((err) => console.log(err));
for (let i = 0; i <= 1000000; i++) {
  console.log("");
}
fs.writeFile(
  "./01-async-js/easy/3-read-from-file.txt",
  "hello from kaushal",
  (err) => {
    console.log(err);
  }
);
