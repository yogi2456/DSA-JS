//  2. array traversing

// let data = [2, 3, 4, 5, 6, 7, 8, 67, 78];

// function traverseEl() {
//     for(let i = 0; i <= data.length - 1; i++) {
//         console.log(`Array ${i} is ${data[i]}`)
//     }
//     let x = 5;
//     console.log(data[x])           // in index value will be return
// }

// console.log(traverseEl())

//  3.  array insert element

// let data = [2, 3, 5, 6, 7, 8, 34, 56];
// console.log(data)
// let position = 2;
// let newEl = 76;

// function insertEl() {
//     for (let i = data.length - 1; i >= 0; i--) {
//         if(i >= position) {
//             data[i + 1] = data[i]
//             if(i == position) {
//                 data[i] = newEl
//             }
//         }
//     }
//     console.log(data)
// }

// console.log(insertEl())

//  4.  array-deleting element


// let data = [2, 3, 5, 6, 4, 7, 8, 34, 56];
// console.log(data);
// let position = 5;

// function deleteEl() {
//     for(let i = position; i < data.length - 1; i++) {
//         data[i] = data[i + 1]
//     }
//     data.length = data.length - 1;
//     console.log(data)
// }

// console.log(deleteEl());


//  5.  array-search element                                    //  wrongggg

// let data = [2, 3, 5, 6, 7, 8, 34, 56];
// let item = 20;
// let index = undefined;

// function searchEl() {
//     for(let i = 0; i < data.length; i++) {
//         console.log(data[i])
//         if(data[i] === item) {
//             index = i
//         } 
//     }
//     console.log(index)
// }

// console.log(searchEl())

// let data = [2, 3, 4, 5, 2, 67, 45, 66];                     //   wrongggg
// let item = 2;
// let result = [];

// function searchSameEl() {
//     for(let i = 0; i <= data.length - 1; i++) {
//         if(data[i] === item) {
//             result[result.length] = i;
//             console.log(`item is index ${i}`)
//         }
//         console.log(result)
//     }
// }

// console.log(searchSameEl())              


//  6. Merge two arrays

// let data = [1, 2, 3, 3];
// let data1 = [5, 6, 3, 7];
// let result = [];

// function mergeTwoArray() {
//     for(let i = 0; i < data.length; i++) {
//         result.push(data[i]);
//     }
//     for(let j = 0; j < data1.length; j++) {
//         result.push(data1[j])
//     }
//     result.sort()
//      return result;
// }

// console.log(mergeTwoArray())


// let data = [23, 45, 67, 78];
// let data2 = [45, 56, 67, 77];
// let data3 = [];

// function mergeTwo() {
//     for(let i = 0; i < data.length; i++) {
//         data3[i]=data[i]
//     }
//     for(let i = 0; i < data2.length; i++) {
//         data3[data.length+i]=data2[i]
//     }
//     return data3;
// }

// console.log(mergeTwo())


//  7. merge two arrays with while loop


// function mergewhile() {
//     let data1 = [2, 4, 6, 8, 10, 22, 34, 56, 78, 90];
//     let data2 = [1, 3, 5, 7, 9, 13, 55];
//     let data3 = [];
//     let d1 = 0;
//     let d2 = 0;
//     let d3 = 0;
//     while(d1 < data1.length && d2 < data2.length) {
//         if(data1[d1] < data2[d2]) {
//             data3[d3]=data1[d1]
//             d1++;
//         } else {
//             data3[d3]=data2[d2]
//             d2++;
//         }
//         d3++;
//     }
//     while(d1 < data1.length) {
//         data3[d3] = data1[d1]
//         d1++;
//         d3++;
//     }
//     return data3;
// }

// console.log(mergewhile())


// chapter 8 - 8.1 explanation about time complexity space complexity algorithm and big O notations asymptotic notations and how to calculate time complexity


//  9. arrray sorting 

// let data = [56, 78, 34, 45, 65, 99, 12, 33, 23, 2, 5, 7, 9];

// function arraySort() {
//     for(let i = 0; i < data.length; i++) {
//         for(let j = 0; j < data.length; j++) {
//             // console.log(data);
//             if(data[j] > data[j + 1]) {
//                 let temp = data[j]
//                 data[j] = data[j + 1]
//                 data[j + 1] = temp;
//             }
//         }
//         console.log(data)
//     }
// }

// arraySort()

// let data = [56, 78, 34, 45, 65, 99, 12, 33, 23, 2, 5, 7, 9];
// let sorting = data.sort();
// console.log(sorting);


//  10. recursion

let data = 7;

function factorial(item) {
    if(item == 0) {
        return 1;
    }
    return item * factorial(item - 1)
}

console.log(factorial(data));