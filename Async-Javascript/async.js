// document.body.style.backgroundColor = "red";
// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "teal";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "pink";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// console.log("DONE RUNNING");
const res = fakeRequestPromise("www.stuff.com/coffee");
res.then(() => {
  console.log("IT WORKED");
});
