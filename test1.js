// const Geeks = {
//     weekday: 'long', year:
//         'numeric', month: 'long', day: 'numeric'
// };
// const dateformat = new Date();
  
// const dateTimeFormat4 = new Intl.DateTimeFormat('hi', Geeks);
// console.log(dateTimeFormat4.format(dateformat));
var promise = new Promise((resolve, reject) => {
    resolve('Success!');
  });
  
  promise.then(value => {
    console.log(value); // Success!
  }, reason => {
    console.error(reason); // Error!
  });