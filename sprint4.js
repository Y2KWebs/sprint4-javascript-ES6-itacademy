var tasks = [
  {
    name: "Start React web",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on facebook",
    duration: 240,
  },
];
var res = [];
tasks.forEach((e) => res.push(e.name));
console.log(res);

const res2 = tasks.map((x) => x.name);
console.log(res2);
