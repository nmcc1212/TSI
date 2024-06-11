const prompt = require("prompt-sync")();

// define a priority queue
let priorityQueue = {
  head: {
    value: 10,
    priority: 2,
    next: {
      value: 5,
      priority: 1,
      next: {
        value: 16,
        priority: 3,
        next: null,
      },
    },
  },
};
// cone sort with gap

function combSort(list) {
  let gap = list.length;
  let shrink = 1.3;
  let sorted = false;
  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }
    let i = 0;
    while (i + gap < list.length) {
      if (list[i] > list[i + gap]) {
        let temp = list[i];
        list[i] = list[i + gap];
        list[i + gap] = temp;
        sorted = false;
      }
      i++;
    }
  }
  return list;
}

// merge sort
function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  }
  let mid = Math.floor(list.length / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);
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
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// quick sort
function quickSort(list, left, right) {
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(list, pivot, left, right);
    quickSort(list, left, partitionIndex - 1);
    quickSort(list, partitionIndex + 1, right);
  }
  return list;
}
// bubble sort
function bubbleSort(list) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < list.length; i++) {
      if (list[i] && list[i + 1] && list[i] > list[i + 1]) {
        let temp = list[i];
        list[i] = list[i + 1];
        list[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return list;
}

console.log(
  " 1 for bubble sort, 2 for quick sort, 3 for merge sort, 4 for comb sort",
);
let input = prompt("Enter a number between 1 and 4: ");
input = parseInt(input);
if (input == 1) {
  console.log(bubbleSort(priorityQueue));
} else if (input == 2) {
  console.log(quickSort(priorityQueue, 0, priorityQueue.length - 1));
} else if (input == 3) {
  console.log(mergeSort(priorityQueue));
} else if (input == 4) {
  console.log(combSort(priorityQueue));
} else {
  console.log("You did not enter a number between 1 and 4.");
}
