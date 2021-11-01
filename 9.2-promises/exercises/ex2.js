const dividerArray = [2, 3, 5, 10];

const promise = new Promise((resolve, reject) => {
  let randomArray = [];
  for(let index = 0; index < 10; index += 1) {
    randomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  
  summedValuesOfScaledArray = randomArray
    .map((number) => number * number)
    .reduce(((acc, cur) => acc + cur), 0);

  (summedValuesOfScaledArray < 8000)
    ? resolve (summedValuesOfScaledArray)
    : reject (summedValuesOfScaledArray)
})
.then((arraySum) => dividerArray.map((value) => arraySum / value))
.then((dividedArray) => dividedArray.reduce((acc, cur) => acc + cur))
.then(result => console.log(result))
.catch(arraySum => console.log(`É mais de oito mil! Essa promise deve estar quebrada!(${arraySum})`))
