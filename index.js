const sortAscending = (arr) => {
  let aux;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

const sortDescendant = (arr) => {
  let aux;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
};

const deleteElementByIndex = (arr, pindex) => {
  const newArray = [...arr.slice(0, pindex), ...arr.slice(pindex + 1)];
  console.log("new array", newArray);
};

function main() {
  let list = [4, 3, 2, 6, 10, 2];
  deleteElementByIndex(list, 2);
}

main();
