function getMaxSubSum(arr, admit_empty_subarrays = true) {
  let maxSum = -Infinity;
  let partialSum = 0;

  for (let item of arr) {
    partialSum = Math.max(item, partialSum + item);
    maxSum = Math.max(maxSum, partialSum);
  }

  if (admit_empty_subarrays) {
    maxSum = Math.max(0, maxSum);
  }

  return maxSum;
}