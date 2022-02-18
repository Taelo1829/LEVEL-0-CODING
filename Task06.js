const maximum = (...num) => {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
    }
  }

  return max;
};
console.log(maximum(-1, -100, -1000, -88));
