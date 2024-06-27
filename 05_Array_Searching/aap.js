

function searchElement(){
    let data = [23,43,62,42,75,49]
    let item  = document.getElementById("searchEl").value;
    let index = undefined;
    for(let i=0; i<data.length-1; i++){
    if(data[i] === parseInt(item) ){
        index=i
        break;
    } else{
        index= 'value not exits'
    }
}
console.log(index)
}



