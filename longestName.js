let name1 = "Martin";
let name2 = "Sofia";
let name3 = "Theodor";

if (name1.length > name2.length && name1.length > name3.length) {
  console.log(`${name1} has the longest name.`);
} else if (name2.length > name1.length && name2.length > name3.length) {
  console.log(`${name2} has the longest name.`);
} else if (name3.length > name1.length && name3.length > name2.length) {
  console.log(`${name3} has the longest name.`);
} else if (name1.length === name2.length && name1.length === name3.length) {
  console.log(
    `All three names, ${name1}, ${name2} and ${name3}, are the same length.`
  );
} else if (name2.length === name1.length && name2.length != name3.length) {
  console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (name3.length === name1.length && name3.length != name2.length) {
  console.log(`${name1} and ${name3} tie for the longest name.`);
} else {
  console.log(`${name2} and ${name3} tie for the longest name`);
}

// tried a switch statement but it would log all options
// switch (true) {
//   case name1.length > name2.length && name1.length > name3.length: {
//     console.log(`${name1} has the longest name.`);
//   }
//   break
//   case name2.length > name1.length && name2.length > name3.length: {
//     console.log(`${name2} has the longest name.`);
//   }
//   break
//   case name3.length > name1.length && name3.length > name2.length: {
//     console.log(`${name3} has the longest name.`);
//   }
//   break
//   case name1.length === name2.length && name1.length === name3.length: {
//     console.log(`All three names, ${name1}, ${name2} and ${name3}, are the same length.`);
//   }
//   break
//   case name2.length === name1.length && name2.length != name3.length: {
//     console.log(`${name1} and ${name2} tie for the longest name.`);
//   }
//   break
//   case name3.length === name1.length && name3.length != name2.length: {
//     console.log(`${name1} and ${name3} tie for the longest name.`);
//   }
// }

// switch (name()) {
//   case 1:
//     {
//       console.log(length);
//     }
//     break;
//   case name2:
//     {
//       console.log(length);
//     }
//     break;
//   case name3:
//     {
//       console.log(length);
//     }
//     break;
//   default:
// }

// let length = name1.length;
// console.log(length);

// if (name1.length > name2.length) {
//   console.log(`${name1} has the longest name.`);
// } else if (name2.length > name1.length) {
//   console.log(`${name2} has the longest name.`);
// } else {
//   console.log(`All two names, ${name1}, and ${name2}, are the same length`);
// }
