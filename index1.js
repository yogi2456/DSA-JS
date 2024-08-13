// merge list with for loop

// let data1 = [2, 4, 6, 8, 10, 12];
// let data2 = [1, 3, 5, 7, 9, 11, 13];
// let data3 = [];

// function mergeList() {
//     for(let i = 0; i < data1.length; i++) {
//         data3.push(data1[i])
//     }
//     for(let j = 0; j < data2.length; j++) {
//         data3.push(data2[j])
//     }
//     console.log(data3)
// }

// console.log(mergeList())

// let data1 = [2, 4, 6, 8, 10, 12];
// let data2 = [1, 3, 5, 7, 9, 11, 13];
// let data3 = []

// function mergeList() {
//     for(let i = 0; i < data1.length; i++) {
//         data3[i] = data1[i]
//     }
//     for(let i = 0; i < data2.length; i++) {
//         data3[data1.length+i] = data2[i]
//     }
//     console.log(data3)
// }

// console.log(mergeList())

// merge list with while loop


// function mergeList() {
//     let data1 = [2, 4, 6, 8, 10, 12];
// let data2 = [1, 3, 5, 7, 9, 11, 13];
// let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

// while(d1 < data1.length && d2 < data2.length) {
//     if(data1[d1] < data2[d2]) {
//            data3[d3] = data1[d1]
//            d1++;
//            d3++
//     } else {
//         data3[d3] = data2[d2];
//         d2++;
//         d3++
//     }
    
// }
// while(d2 < data2.length) {
//     data3[d3] = data2[d2]
//     d2++;
//     d3++;
// }
// return data3;
// }

// console.log(mergeList())

// inserting a value with loops

// let data = [2, 3, 5, 6, 7, 8, 34, 56];
// console.log(data)
// let position = 2;
// let newEl = 76;

// function insertEl() {
//     for(let i = data.length - 1; i >= 0; i--) {
//         if(i >= position) {
//             data[i + 1] = data[i]
//             if(i == position) {
//                 data[i] = newEl;
//             }
//         }
//         console.log(data)
//     }
// }

// console.log(insertEl())


// deleting a value with loop

// let data = [2, 3, 5, 6, 7, 8, 34, 56];
// console.log(data)
// let position = 5;

// function deleteEl() {
//     for(let i = position; i < data.length-1; i++) {
//         data[i] = data[i + 1]
//     }
//     data.length = data.length - 1;
//     console.log(data)
// }

// deleteEl()


// array sorting

// let data = [23, 45, 1, 2, 4, 5, 90, 67, 76, 88, 55];

// function arraySort() {
//     for(let i = 0; i < data.length; i++) {
//         for(let j = 0; j < data.length; j++) {
//             if(data[j] < data[j + 1]) {
//                 let temp = data[j]
//                 data[j] = data[j + 1]
//                 data[j + 1] = temp;
//             }
//         }
//         console.log(data)
//     }
// }

// arraySort()


// recursion reverse array

// let data = [23, 45, 1, 2, 4, 5, 90, 67, 76, 88, 55];
// let temp;

// function recursionArray(data, start, end) {
//     console.log(data)
//     if(start <= end) {
//         temp = data[start]
//         data[start] = data[end]
//         data[end] = temp;
//         recursionArray(data, start + 1, end - 1)
//     }
//     console.log(data)
// }

// recursionArray(data, 0, data.length - 1)