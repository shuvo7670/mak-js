// Loops in JS
// For loop

// for (let i = 0; i < 11; i++) {
//   console.log("Count:", i);
// }

// while loop
// let i = 0;
// while (i < 5) {
//   console.log("Count:", i);
//   i++;
// }

// do while loop
// let i = 0;
// do {
//   console.log("Count:", i);
//   i++;
// } while (i < 5);

const names_array = ['Rakib', 'Ali','Shabuj'];
names_array.forEach((value,index) => {
    console.log(index,value);
});

names_array.map((value,index) => {
    console.log(index,value);
});