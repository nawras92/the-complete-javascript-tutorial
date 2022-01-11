console.clear();

interface Human {
  canFeel: true;
  canThink: true;
  iq: number;
  country: string;
}

const displayInfo = <T extends Human>(x: T): T => {
  console.log(`
							This human can think and feel. His/her IQ is ${x.iq} and s/he is from ${x.country}
							`);

  return x;
};

const h1: Human = {
  canFeel: true,
  canThink: true,
  iq: 50,
  country: "India",
};

const h2: Human = {
  canFeel: true,
  canThink: true,
  iq: 100,
  country: "Amazon Forest",
};

const h3 = {
  canFeel: false,
  canThink: false,
  iq: 70,
  country: "unknown",
};

const res = displayInfo(h3);
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
