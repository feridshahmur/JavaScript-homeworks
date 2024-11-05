// Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin
// function power() {
//     const first = +prompt("1-ci ədədi daxil edin:");
//     const second =+prompt("2-ci ədədi daxil edin:");
    
//     let result = 1;

//     for (let i = 0; i < second; i++) {
//         result *= first;
//     }

   
//     alert(`${result}`);
// }


// power();
// 2.Bir funksiya yazın, 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]
// function move(array, index, newIndex) {
    
//     const arr = array[index];

    
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
       
//         if (i === index) {
            
//             if (i !== newIndex) {
                
//                 newArray.push(array[i]);
//             }
            
//             newArray.push(arr);
//         }
//     }

    
//     return newArray;
// }


// console.log(move([10, 20, 30, 40, 50], 0, 2)); 
// function deleteRepeate(array) {
//     const unique = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         let isFlag = true;

//         for (let j = 0; j < unique.length; j++) {
//             if (unique[j] === element) {
//                 isFlag = false; 
//             }
//         }

        
//         if (isFlag) {
//             unique.push(element);
//         }
//     }

//     return unique;
// }


// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5])); 
// console.log(deleteRepeate([1, 2, 3, 4, 5]));       
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5])); 
// 5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// // console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// // Expected Output:
// // [1,2,3,4,5,6 ,7,8,9]
// function concatArray(array1, array2) {
//     const combinedArray = [];

   
//     for (let i = 0; i < array1.length; i++) {
//         combinedArray.push(array1[i]);
//     }

    
//     for (let j = 0; j < array2.length; j++) {
//         combinedArray.push(array2[j]);
//     }

//     return combinedArray;
// }


// console.log(concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9])); 
// function countWords(sentence) {
//     let wordCount = 0;

//     for (let i = 0; i < sentence.length; i++) {
//         const char = sentence[i];
//         if (char == sentence[i] || char == ' ') {
//             wordCount++
//         }
    
//     }

//     return wordCount;
// }


// console.log(countWords("Müəllim yüksək bal nolar")); 
// 7. Function language. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin medianını tapsın.Median ən ortada dayanan ədədi bildirir. Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.
// function functionLanguage(array){
//     let median;
//     for (let i = 0; i < array.length; i++) {
//         if (array.length%2 !=0) {
//             median = array[i].length/2
//         }
//         else if (array.length%2 ==0) {
//             median
//         }
        
//     }
// }
// yaza bilmedim
// Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]
// function clearDuplicate(array) {
//     const uniqueArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

        
//         let isDuplicate = false;
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (uniqueArray[j] === element) {
//                 isDuplicate = true;
//                 break;
//             }
//         }

        
//         if (!isDuplicate) {
//             uniqueArray.push(element);
//         }
//     }

//     return uniqueArray;
// }



// function convert(inputString) {
//     let result = '';

//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i];

        
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase();
//         } else {
//             result += char.toUpperCase();
//         }
//     }

//     return result;
// }



// console.log(convert('saLamNecesen'));        
// Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2 , 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual( [1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true 
// function isEqual(array1, array2) {
    
//     if (array1.length !== array2.length) {
//         return false;
//     }

    
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false; 
//         }
//     }

//     return true; 
// }


// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])); 










