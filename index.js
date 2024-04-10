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

const deleteElementByIndex = (arr, pindex) => [
  ...arr.slice(0, pindex),
  ...arr.slice(pindex + 1),
];

const deleteByElement = (arr, pelement) => {
  const index = arr.findIndex((element) => element === pelement);
  if (index === -1) {
    return "No encontro elemento";
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const sumAllElement = (arr) => {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
};

function main() {
  let list = [4, 3, 2, 6, -10, 2];
  console.log(deleteByElement(list, 8));
  console.log(sumAllElement(list));
}

main();
