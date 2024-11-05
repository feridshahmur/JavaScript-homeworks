let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last ",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];
// ?  1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)
// let tname = arr.filter((names)=>
//   names.name.toLowerCase().startsWith("t")

// )
// console.log(tname);
// ?  2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// let count = 0;


// arr.forEach(item => {
  
//   if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//     count++; 
//   }
// });

// console.log(count); 
// ? 3) "name" -i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key
// "lerinin cemini tapin
// let sum = 0;


// arr.forEach(item => {
  
//   if (item.name.toLowerCase().startsWith('t') && item.name.toLowerCase().endsWith('t')) {
//     sum+=item.key; 
//   }
// });

// console.log(sum);
// ? 4) "name" -i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arr.forEach((items)=>{
//   if (items.name.toLowerCase().endsWith("e")) {
//     return items.name = "SuperDev"
//   }
// })
// console.log(arr);
// ? 5) "name"-i en uzun olan obyekti tapin
// let longestName = arr[0]; 
// arr.forEach(item => {
//   if (item.name.length > longestName.name.length) {
//     longestName = item; 
//   }
// });
// console.log(longestName); 
// ? 6) "name"-i en uzun olan obyektin key'ni tapin
//  let longestName = arr[0]; 
// arr.forEach(item => {
//   if (item.name.length > longestName.name.length) {
//     longestName = item; 
//   }
// });
// console.log(longestName.key); 
// ? 7) "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let longestName = arr[0];
// let indexLongestName = 0;
// let squareIndex = 1;
// arr.forEach((item, index) => {
//   if (item.name.length > longestName.name.length) {
//     longestName = item; 
//     indexLongestName = index;
//     squareIndex = index ** 2
//   }
// });
// console.log(squareIndex); 
// ? "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// const array = arr.filter((names)=>{
//   return names.name.length === 4;
// })
// console.log(array);
// ? en boyuk "key"
// ? i olan obyektin "name" -i ni 
// let longestKey = arr[0];
// let long = arr.forEach((names)=>{
//   if (longestKey.key < names.key ) {
//     longestKey = names
//   }
// })
// console.log(longestKey.name);
// ? terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.
// let result = arr.filter(names => names.name.split('l').length - 1 === 2);

// console.log(result);
// ? terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
//  let result = arr.filter((names)=> names.name.split("t").length-1 >=2)
//  console.log(result);
// ? key'leri 10'dan boyuk ve "name" -i 'l' herfi ile bashlayan obyektleri tapaq
// let filteredArray = arr.filter((names)=> names.key >= 10 && names.name.startsWith("l"))
// console.log(filteredArray);



