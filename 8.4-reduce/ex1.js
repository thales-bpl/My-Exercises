const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const reducer = (acc, cur) => {
  return acc.concat(cur)
}

function flatten(someArrays) {
  return someArrays.reduce(reducer,[])
}

console.log(flatten(arrays));