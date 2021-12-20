function myFunction(param) {
    if(typeof param === 'function'){
        param('học lập trình')
    }
}

function myCallBack(value){
    console.log('value: ', value);
}

myFunction(myCallBack)