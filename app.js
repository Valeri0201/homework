//task1

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  let strings = ["hi","hello","my","friend","hi","hello"];
  alert( unique(strings) );
  
  //task 3
  //for (let a, b => 2,5 ){
  //console.log(i);
  //}
  
  //task 7
  function findUnique(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
  alert( findUnique([1, 2], [1, 2]));
  alert( findUnique([1, 2],["hello", 3]));
  
  //task 6
   
  function Calculator() {
  
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }
  //task 4
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomInt(1, 500);
  alert(getRandomInt);
  
  
  //task5