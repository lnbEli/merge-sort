export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const splitArrayA = array.slice(0, array.length / 2);
  const splitArrayB = array.slice(array.length / 2);

  const mergedA = mergeSort(splitArrayA);
  const mergedB = mergeSort(splitArrayB);
  let mergedC = [];

  while (mergedA.length !== 0 || mergedB.length !== 0) {
    if (mergedA.length === 0) {
      mergedC = mergedC.concat(mergedB);
      break;
    } else if (mergedB.length === 0) {
      mergedC = mergedC.concat(mergedA);
      break;
    } else if (mergedA[0] > mergedB[0]) {
      mergedC.push(mergedB[0]);
      mergedB.shift();
    } else {
      mergedC.push(mergedA[0]);
      mergedA.shift();
    }
  }

  return mergedC;
}

const testArray = [9, 11, 1, 12, 5, 23, 87, 111, 2, 4];
console.log(mergeSort(testArray));
