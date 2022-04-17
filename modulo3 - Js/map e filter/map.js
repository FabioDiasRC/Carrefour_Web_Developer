const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

// function mapComThis(arr,thisArg) {
//   return arr.map((item) => item * this.value, thisArg )
// }

function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const nums = [1, 2];

console.log(mapComThis(nums, maca));
console.log(mapComThis(nums, laranja));

//funçaõ sem o this

function mapSemThis (arr) {
  return arr.map(function (item) {
    return item*2
  })
}

console.log(mapSemThis(nums))