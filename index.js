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

const noRepeat = (arr) => {
  let newArray = [];
  let view = {};
  for (let i = 0; i < arr.length - 1; i++) {
    if (!view[arr[i]]) {
      newArray.push(arr[i]);
      view[arr[i]] = true;
    }
  }
  return newArray;
};

const changePosition = (arr) => {
  let aux = [];
  for (i = 0; i < arr.length / 2; i++) {
    aux = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = aux;
  }
  return arr;
};

function main() {
  let list = [4, 3, 2, 6, -10, 2];
  //   deleteRepeats(list);
  console.log(changePosition(list));
  //   console.log(noRepeat(list));
}

main();
console.log("prob");
