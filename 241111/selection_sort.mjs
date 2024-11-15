let arr = [4, 2, 3, 1];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
};

console.log("==== 정렬 전 ====");
console.log(arr);

selectionSort(arr);

console.log("==== 정렬 후 ====");
console.log(arr);
