const couter = () => {
  let secCount = 0;
  setInterval(() => {
    secCount += 1;
    console.log(secCount);
  }, 100);
};
couter();
