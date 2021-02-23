function sumSalary(salaries) {
  // ваш код...
  let sum = 0;
  for (let sal of Object.values(salaries)) {
    if (isFinite(sal) === true) {
      sum += sal;
    }
  }
  return sum;
}