//bigheatDigit(379) - 9
//bigheatDigit(2) - 2
//bigheatDigit(377401) - 7

const bigheatDigit = (num) => {
    if (num === undefined) {
      return "Input Parameter can't be empty"
    } else {
    let a = Math.floor(num / 2);
    let b = num - a;
    let c = [];
    c.push(a, b);
    return c;
    }
  };

console.log(bigheatDigit(379)) ; //9
console.log(bigheatDigit(2)) ; //2
console.log(bigheatDigit(377401)) ; //7

