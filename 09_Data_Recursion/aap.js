// function apple(n){
//     console.log(n)
//     if(n<10){
//         apple(n+1);
//     }
// }
// let  data = 0;
// apple(data);



function factorial(item){
    if(item ==0){
        return 1
    }
    return item *factorial(item-1)

}

let data = 5;
console.log(factorial(data));



