import _ from "lodash";

// Traditional way of Memoization
// export default function swatch(color) {
//   console.log(`swatch; ${color}`);
//   return `swatch; ${color}`;
// }
// const memoedSwatch = _.memoize(swatch);

// memoedSwatch("red");
// memoedSwatch("red");
// memoedSwatch("blue");
// memoedSwatch("red");
// memoedSwatch("blue");

//React way of Memoization
//method 1
// export default function swatch(color) {
//   console.log(`swatch; ${color}`);
//   return `swatch; ${color}`;
// }

// let prev = {
//   color: null,
//   result: null,
// };

// function rmSwatch(color) {
//   if (color === prev.color) {
//     return prev.result;
//   }
//   prev.color = color;
//   prev.result = swatch(color);
// }

//this will show single result for same color args
// rmSwatch("red");
// rmSwatch("red");
// rmSwatch("red");
// rmSwatch("red");
// rmSwatch("blue");
// rmSwatch("blue");

//tif we change color args in each call then it will print each call
// rmSwatch("red");
// rmSwatch("blue");
// rmSwatch("red");
// rmSwatch("blue");

//React way of memoization
//simulating re-render behaviour by creating multiple instances of object
export default function swatch(color) {
  console.log(`swatch; ${color}`);
  return `swatch; ${color}`;
}

const createSwatch = () => {
  let prev = {
    color: null,
    result: null,
  };

  return (color) => {
    if (color === prev.color) {
      return prev.result;
    }
    prev.color = color;
    prev.result = swatch(color);
  };
};

const swatch1 = createSwatch();
const swatch2 = createSwatch();

//if we call the same instace with same color it will print only once
swatch1("red");
swatch1("red");

//if we call the different instace with same color it will print each of them, it shows that a value is specific for each instance
swatch1("red");
swatch2("red");
