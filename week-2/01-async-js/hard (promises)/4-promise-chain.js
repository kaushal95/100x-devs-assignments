/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t1) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("t1 resolved");
    }, t1);
  });
}

function wait2(t2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("t2 resolved");
    }, t2);
  });
}

function wait3(t3) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("t3 resolved");
    }, t3);
  });
}

async function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  const f1 = await wait1(t1);
  const f2 = await wait2(t2);
  const f3 = await wait3(t3);
  console.log("inside func", [f1, f2, f3, Date.now() - startTime]);
  return [f1, f2, f3, Date.now() - startTime];
  //   const promiseAll = Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  //   promiseAll.then((res) => {
  //     console.log([res, Date.now() - startTime]);
  //     return [res, Date.now() - startTime];
  //   });
}
const result = calculateTime(3000, 2000, 1000);
console.log(result);
result.then((res) => console.log(res));
for (let i = 0; i <= 100; i++) {
  console.log(1);
}
module.exports = calculateTime;
