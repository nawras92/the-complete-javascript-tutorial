console.clear();
var displayInfo = function (x) {
    console.log("\n\t\t\t\t\t\t\tThis human can think and feel. His/her IQ is ".concat(x.iq, " and s/he is from ").concat(x.country, "\n\t\t\t\t\t\t\t"));
    return x;
};
var h1 = {
    canFeel: true,
    canThink: true,
    iq: 50,
    country: "India"
};
var h2 = {
    canFeel: true,
    canThink: true,
    iq: 100,
    country: "Amazon Forest"
};
var h3 = {
    canFeel: false,
    canThink: false,
    iq: 70,
    country: "unknown"
};
var res = displayInfo(h3);
console.log(res);
// const displayLength = <r>(i: Array<r>): Array<r> => {
//   console.log(i.length);
//   return i;
// };
// const res = displayLength([5, 5, 8, 9]);
// console.log(res);
// function returnValue<MyType>(x: MyType): MyType {
//   return x;
// }
// const res = returnValue<string>("true");
// console.log(res);
