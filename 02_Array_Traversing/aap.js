// make HTML Page write Basic Array traversing
// with loop Accessing element Access element withe text
// input & button validation


let data = [9,45,29,14,19,51,16,81,77,4]


// traversing
// for(let i=0; i<data.length; i++){
// document.write(`Array ${i} =${data[i]} <br>`)
// }


// Acessing
// let x = 3;
// document.write(data[x])


// using button click accessing specific index value

function getElement() {
    let negtive = -1;
    let el = document.getElementById("element").value;
    el = parseInt(el); // Parse the input value to an integer
    
    if (isNaN(el)) {
        alert("You did not enter a numeric value. Please enter a number like 123.");
    } else if (el < negtive) {
        alert("You entered a negative value. Please enter a correct value.");
    } else if (el >= data.length) {
        alert("You entered an out-of-range value. Please enter a value within the range.");
    } else {
        alert(data[el]);
    }
}
