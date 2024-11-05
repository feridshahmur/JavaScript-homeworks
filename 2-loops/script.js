/** @format */

// ? 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.
// let a = 565;
// let sum = 0;
// while (a>0) {
//     let reminder = a % 10;
//     console.log(reminder);
//     a= (a-reminder)/10;
//     sum+=reminder;

// }

// console.log(sum);
// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let a = 25;
// for (let i = 0; i <= a; i++) {
//     if (a % i==0) {
//         console.log(i);

//     }

// }
// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
//
// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 3 6
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100
// for (let i = 0; i <=10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }
// 5) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  i i^2 i^3
//  0 0 0
//  1 1 1
//  2 4 8
//  3 9 27
//  4 16 64
//  5 25 125
//  6 36 216
//  7 49 343
//  8 64 512
//  9 81 729
//  10 100 1000
// for (let i = 0; i <=10; i++) {
//     console.log(`${i}  ${i*i}  ${i*i*i}`);

// }
// 6) 0 - 100 arası tək ədədlərin və cüt əd ədlərin cəmini tapın
// let sumCem=0;
// let sumTek= 0;
// for (let i = 0; i <= 100; i++) {
//     if (i%2==0) {
//         sumCem+=i;
//     }

// }
// for (let i = 0; i <= 100; i++) {
//     if (i%2!=0) {
//         sumTek+=i;
//     }

// }
// console.log(sumCem);
// console.log(sumTek);
// 7) Arraydəki ən böyük və ən kiçik element-ləri tapan alqoritm yazın. Math objectindən istifadə edə bilməzsiniz.
// Məsələn: [4,2,7,9,3,12,46,32,19];
// Minimum: 2
// Maximum: 46
// let array = [4,2,7,9,3,12,46,32,19];
// let maximum = array[0];
// let minimum = array[0];
// for (let i = 0; i < array.length; i++) {
//     if (array[i]>maximum) {
//         maximum = array[i];

//     }

// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i]<minimum) {
//         minimum = array[i];

//     }

// }
// console.log(maximum);
// console.log(minimum);
// 7) Arraydəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.

// let array = [4,2,7,9,3,12,46,32,19];
// let max = array[0];
// let min = array[0];
// let sum =0;
// for (let i = 0; i < array.length; i++) {
//     if (array[i]>max) {
//         max = array[i];
//     }
// }
// for (let i = 0; i < array.length; i++) {
//     if (array[i]<min) {
//         min = array[i];
//     }

// }
// sum += (max + min)/2;
// console.log(max);
// console.log(min);
// console.log(sum);
// 8) let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

//  task: sampleNews mətnində olan boşluqların sayını təyin edən proqram yazın.

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,and new features happen.`;
// let say=0;
// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i] === " ") {
//         say++
//     }

// }
// console.log(say);
// # 0 - 100 arası yalnız sadə ədədləri console'da çap edin
// yaza bilmedim
// # const fruits = ["alma", "banan", "qarpız", "

//     portağal", "ananas", "nar"];
//     array daxilindəki ən uzun sözü tapan alqoritm yazın
// const fruits = ["alma", "banan", "qarpız","portağal", "ananas", "nar"];
// let arrayinMaxUzunlugu="";

// for (let i = 0; i < fruits.length; i++) {
//     if (arrayinMaxUzunlugu.length<fruits[i].length) {
//         arrayinMaxUzunlugu=fruits[i];
//     }

// }
// console.log(arrayinMaxUzunlugu,);
// # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];
// let sumProduct=0;
// let ortaGiymet=0;
// for (let i = 0; i < products.length; i++) {
//     sumProduct+= products[i].price;
//     ortaGiymet = sumProduct/5;
    
// }
// console.log(sumProduct);
// console.log(ortaGiymet);

