const toHoursAndMin = (num) => {
  const hours = parseInt(num / 60);
  const minutes = num % 60;
  if (hours === 1 && minutes === 1) {
    return `${hours} hour, ${minutes} minute`;
  } else if (hours === 1) {
    return `${hours} hour, ${minutes} minutes`;
  } else if (minutes === 1) {
    return `${hours} hours, ${minutes} minute`;
  } else {
    return `${hours} hours, ${minutes} minutes`;
  }
};
console.log(toHoursAndMin(121));
