function timer(x) {
  setTimeout(() => {
    console.log(x);
    timer(x + 1);
  }, 1000);
}
timer(1);
