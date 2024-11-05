// ? Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World"); Nəticə :
//? "HELLO WORLD
//  function convertToUpper(sentence) {
//     let words = sentence.toUpperCase()
//     return words;
// }
// console.log(convertToUpper("Hello World"));
// ? task2:Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın
// function findLongestWord(sentence) {
//       let words = sentence.split(" ");
//       let longestWord = "";
//       for (let i = 0; i < words.length; i++) {
//         if (longestWord.length < words[i].length) {
//           longestWord=words[i];
//         }
//       }
//       return longestWord;
//     }
//     console.log(
//       findLongestWord("Lorem ipsum dolor sit, amet consectetur adipisicing elit.")
//     );
    
// ? Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.
// function tersSirayaDuz(cumle) {
    
//     let sozler = cumle.split(' ');

    
//     let tersSozler = [];
//     for (let i = sozler.length - 1; i >= 0; i--) {
//         tersSozler.push(sozler[i]);
//     }

    
//     return tersSozler.join(' ');
// }


// console.log(tersSirayaDuz("Muellim xahis yuksek bal yazin")); 
// ? Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// ?replaceCharacter("Salam", "a", "o");

//? Nəticə: "solom"
// function evezle(cumle, kohneHerf, yeniHerf) {
    
//     let yeniCumle = '';
    
//     for (let i = 0; i < cumle.length; i++) {
//         if (cumle[i].toLowerCase() === kohneHerf.toLowerCase()) {
//             yeniCumle += yeniHerf;
//         } else {
//             yeniCumle += cumle[i];
//         }
//     }

//     return yeniCumle.toLowerCase();
// }


// console.log(evezle("Salam", "a", "o")); 
// ! ARRAY METHODS
// ? add 'Meat' in the beginning of your shopping cart if it has not been already added
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift('Meat');

// console.log(shoppingCart);
// ? add Sugar at the end of you shopping cart if it has not been already added
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//  shoppingCart.push('Sugar');

//  console.log(shoppingCart);

// ? remove 'Honey' if you are allergic to honey
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let isFlag = true;
// if (isFlag) {
//     for (let i = 0; i < shoppingCart.length; i++) {
//         if (shoppingCart[i] === 'Honey') {
//             shoppingCart.splice(i, 1);
            
//         }
//     }console.log(shoppingCart);
    
    
// }else{
//     console.log(shoppingCart);
    
// }
// ? modify Tea to 'Green Tea'

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


// for (let i = 0; i < shoppingCart.length; i++) {
//     if (shoppingCart[i] === 'Tea') {
//         shoppingCart[i] = 'Green Tea';
        
//     }
// }

// console.log(shoppingCart);
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
//  ? Reverse countries array using reverse() method
// console.log(countries.reverse(" , "));
//? remove "Canada" and "Denmark", and add "Azerbaijan 
// ?(splice)
// countries.splice(2,2);
// console.log(countries);
//? Concatenate the following two variables and store it in a fullStack variable.

// ?const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//? const backEnd = ['Node','Express', 'MongoDB']

// ?console.log(fullStack)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node','Express', 'MongoDB'];
// let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);
// ? Slice out the first 3 companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.splice(0, 3);

// console.log(itCompanies);
// ? Slice out the last 3 companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.splice(4,3);
// console.log(itCompanies);
// ? Slice out the middle IT company or companies from the array
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// itCompanies.splice(3,1);
// console.log(itCompanies);
// ? Sort companies array using sort() method
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies.sort());
// ? Change each company name to uppercase one by one and print them out
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// for (let i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i].toUpperCase());
// }
// Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// if (itCompanies.includes('Google')) {
//     console.log('Google');
// } else {
//     console.log('Company not found');
// }
// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.
// function birlesdirArray(arr1 , arr2 ,char) {
//     return arr1.concat(arr2).join(char);
// }
// console.log(birlesdirArray([1,2,3] , [4,5,6] , "/"));


 


    

