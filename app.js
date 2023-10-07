data = [1, [2, [3], 4], 5];

function doubler(nums) {
  for (let n of nums) {
    if (Array.isArray(n)) {
      doubler(n);
    } else {
      console.log(n * 2);
    }
  }
}
