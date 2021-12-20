const { table } = require("console");

var courses = [
    {
        name: 'hung',
        age: 18 ,
        coin: 100
    },
    {
        name: 'hung',
        age: 18 ,
        coin: 100
    },
    {
        name: 'hung',
        age: 18 ,
        coin: 100
    },
    {
        name: 'hung',
        age: 18 ,
        coin: 100
    },
    {
        name: 'hung',
        age: 18 ,
        coin: 100
    },
];



//map()
// function courseshow(course){
//     console.log(course);
// }

// var newa = courses.map(courseshow);

// console.log(newa);


///////////////////////////////////////////////////////////////////////

//Reduce()
// var i = 0; 

// function coinHandlerReduce(accumulator, currentValue, currentIndex, originArraya ){
// //accumulator: biến khởi tạo, currentValue: giá trị hiện tại, currentIndex: chỉ mục, originArraya: mảng hiện tại
//     i++

//     console.log(i, accumulator);

//     return accumulator + currentValue.coin;
// };

// var totalcoin = courses.reduce(coinHandlerReduce, 0)

// console.log(totalcoin);

///////////////////////////////////////////////////////////////////////

// //btap lam phang mang 
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem);
// }, [])

// console.log(flatArray);

// //Tự tạo reduce2
// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if(arguments.length < 2){
//         i = 1
//         result = this[0]
//     } 
//     for(; i < this.length; i++){
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce2((total, number) => {
//     return total + number
// }, )

// console.log(result)