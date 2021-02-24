let str = "abcde";
let reverse = (str) => [...str].reverse().reduce((a, c) => a + c);
console.log(reverse);
