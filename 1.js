//const podest = 4,
//etag = 5,
//cvart = 4;
//console.log("Кол-во кв в подъезде",etag*cvart);
//console.log("Кол-во кв в доме",etag*cvart*podest);

/*
const x1 = 4;
const y1 = 0;

const x2 = 0;
const y2 = 3;

const y = y1 - y2;
const x = x2 - x1;
const z = y ** 2 + x ** 2;
console.log("Расстояне", Math.sqrt(z));
*/

const n = 100,
  m = 99;
z = Math.max(n, m) - Math.min(n, m);

const ran = Math.round(Math.random() * z + Math.min(n, m));
console.log(ran);
