// //BUBBLE SORT

// function bubbleSort(arr) {
//   let noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([5, 4, 3, 2, 1]));

// SELECTION SORT

// function selectionSort(arr) {
//   for (i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//   }
//   return arr;
// }

// console.log(selectionSort([5, 4, 3, 2, 1]));

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
