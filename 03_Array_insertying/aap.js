// let data = [10,60,98,40,45]
// let newEl = 70;
// let position = 2;
// console.log(data)

// for (let i=data.length-1; i>=0; i--){
//     // console.warn(i)
//     // console.log(i)
//     if(i>= position) {
//         data[i+1] = data[i]
//         if(i === position){
//             data[i] = newEl
//         }
//     }
// }

function inserEl() {
  let data = [10, 60, 98, 40, 45];
  console.log(data);
  let newEl = parseInt(document.getElementById("newEl").value);
  let position = document.getElementById("position").value;

  for (let i = data.length - 1; i >= 0; i--) {
    if (i >= position) {
      data[i + 1] = data[i];
      if (i == position) {
        data[i] = newEl;
      }
    }
  }
  console.log(data);
}

// let data = [10, 60, 98, 40, 45];
// data.splice(2, 0, 800);
// console.log(data);
