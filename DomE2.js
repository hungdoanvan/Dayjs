// //exam 1
// var a = document.getElementsByTagName('a')

// for(var i = 0; i<a.length; ++i){
//     a[i].onclick = function(e){
//         if(!e.target.href.startsWith('https://www.fa')){
//             e.preventDefault()
//         }
//     }


// //exam 2

// var ulElement = document.querySelector('ul');

// console.log(ulElement);

// ulElement.onmousedown = function(e){
//     e.preventDefault();
// }

// ulElement.onclick = function(e){
//     console.log(e.target);
// }

// //exam 3

// document.querySelector('div').onclick = function(){
//     console.log('div');
// }

// document.querySelector('button').onclick = function(e){
//     e.stopPropagation();
//     console.log('ADD');
// }