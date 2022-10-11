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

// const insertionSort = (arr) => {
//   for (let i = 1; i< arr.length; i++){
//     let current = arr[i];
//     for(let j = i-1; j >=0 && arr[j] > current; j--){
//       arr[j+1] = arr[j];      
//       arr[j] = current;
//     }
//   }
//   return arr;
// }

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73]);
