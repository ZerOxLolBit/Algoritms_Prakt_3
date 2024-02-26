const arrays = [
  [1, 14, 0, 7, 2, 8, 11, 7, 7, 13],
  [12, 6, 6, 11, 2, 1, 14, 6, 15, 10],
  [11, 7, 13, 13, 15, 5, 9, 15, 8, 14],
  [15, 3, 2, 14, 15, 5, 10, 4, 5, 0],
  [4, 0, 9, 5, 4, 0, 1, 11, 6, 0],
  [15, 2, 11, 6, 14, 13, 12, 14, 4, 6],
  [3, 12, 0, 8, 5, 6, 15, 10, 1, 15],
  [7, 3, 9, 6, 2, 11, 1, 15, 10, 11],
  [13, 8, 11, 13, 1, 14, 12, 12, 8, 15],
  [8, 12, 8, 11, 12, 1, 14, 11, 4, 0],
  [6, 15, 7, 0, 12, 8, 14, 11, 6, 14],
  [5, 15, 5, 2, 6, 4, 5, 9, 14, 2],
  [15, 15, 10, 7, 3, 0, 15, 9, 11, 7],
  [10, 6, 3, 5, 7, 0, 5, 1, 6, 8],
  [3, 6, 6, 2, 8, 9, 12, 3, 0, 11],
  [10, 13, 4, 2, 6, 4, 4, 3, 13, 0],
  [5, 5, 10, 8, 14, 12, 8, 6, 9, 4],
  [5, 15, 9, 8, 5, 2, 0, 3, 11, 12],
  [4, 0, 4, 12, 6, 0, 11, 14, 5, 12],
  [6, 0, 15, 0, 2, 12, 2, 0, 13, 11],
  [13, 11, 11, 7, 3, 2, 8, 13, 0, 2],
  [0, 9, 5, 7, 10, 15, 8, 6, 0, 15],
  [12, 11, 2, 1, 7, 4, 9, 10, 1, 4],
  [6, 14, 15, 6, 1, 15, 13, 12, 9, 3],
  [7, 0, 8, 2, 7, 7, 6, 8, 6, 14],
  [3, 2, 14, 14, 3, 8, 11, 3, 9, 10],
  [15, 15, 13, 11, 14, 13, 0, 4, 8, 3],
  [4, 15, 6, 2, 4, 3, 6, 12, 10, 1],
  [8, 6, 6, 2, 15, 0, 3, 8, 9, 12],
  [14, 5, 9, 5, 5, 3, 3, 12, 5, 14]
];
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`BubleSort: Поміняли ${arr[j]} та ${arr[j + 1]}`);
        console.log(`BubleSort: Тепер масив: [${arr.join(', ')}]`);
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    console.log(`insertionSort: Вставили ${key} на позицію ${j + 1}`);
    console.log(`insertionSort: Тепер масив: [${arr.join(', ')}]`);
  }
  return arr;
}

function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      console.log(`selectionSort: Поміняли ${arr[i]} та ${arr[minIndex]}`);
      console.log(`selectionSort: Тепер масив: [${arr.join(', ')}]`);
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log(`MergeSort: Об'єднані масиви: [${result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)).join(', ')}]`);
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(arr) {
  if (arr.length <= 1) {
    console.log(`QucikSort: Відсортований підмасив: [${arr}]`);
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(`QucikSort: Ліва частина: [${left}], QucikSort:  Права частина: [${right}]`);
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  console.log(`QucikSort: Відсортовані підмасиви: [${sortedLeft}], [${sortedRight}]`);
  return sortedLeft.concat(pivot, sortedRight);
}

// Виклик функцій сортування для кожного масиву
arrays.forEach(arr => {
  console.log(`\nПочатковий масив: [${arr}]`);
  console.log('----------------------------------------');
  printSortedArray(arr, bubbleSort);
  printSortedArray(arr, insertionSort);
  printSortedArray(arr, selectionSort);
  printSortedArray(arr, mergeSort);
  printSortedArray(arr, quickSort);
});

function printSortedArray(arr, sortFunction) {
  const sortedArray = sortFunction([...arr]); // Копіюємо масив, щоб не змінювати вихідний
  console.log(`Відсортований масив: [${sortedArray.join(', ')}]`);
}
