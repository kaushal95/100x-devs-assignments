/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  const promiseAll = Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  promiseAll.then((res) => {
    console.log([res, Date.now() - startTime]);
    return [res, Date.now() - startTime];
  });
}
const resp = calculateTime(2000, 1000, 3000);
// resp.then((res) => console.log(res));
module.exports = calculateTime;
