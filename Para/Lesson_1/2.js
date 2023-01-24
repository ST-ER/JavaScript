const n = 100,
  m = 99;
z = Math.max(n, m) - Math.min(n, m);

const ran = Math.round(Math.random() * z + Math.min(n, m));
console.log(ran);
