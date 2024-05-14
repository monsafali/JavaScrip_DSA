let Data = [1,2,12,232,312,32,32,12,23,23,223];
for(let i=0; i<Data.length;i++){
    // console.log(Data[i])
    //  document.write(`array ${i} value is ${Data[i]} <br>`)


}



function getElement(){
    let el = document.getElementById('element').value
    if(el <Data.length && typeof parseInt(el) === "number"){
        alert(`The value of give number is ${Data[el]}`)
    }else{
        alert('please enter a valid input')
    }
    
}