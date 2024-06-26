// let data = [10,20,30,12,19,92];
// let position = 3

// for (let i=position; i<data.length-1; i++){
//     data[i] = data[i+1]
// }
// data.length = data.length-1
// console.log(data)


function removeEl(){
    let data = [10,20,30,12,19,92];
    let position = document.getElementById("position").value;
    position =parseInt(position)
    for (let i=position; i<data.length-1; i++){
    console.log(data)
    data[i] = data[i+1]
}
data.length = data.length-1
console.log(data)


}