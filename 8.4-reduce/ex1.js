const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(someArrays) {
  return someArrays.reduce((acc, cur) => acc.concat(cur),[])
}

console.log(flatten(arrays));