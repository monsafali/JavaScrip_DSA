// let data = [23,43,62,42,75,49]
// let data2 = [1,4,2,41,15,409]


// let data3 =[];

// for(i=0; i<data.length; i++){
//     data3[i] = data[i]
// }

// for( i=0; i<data2.length; i++){
//    data3[data.length+i] = data2[i]
// }




// This is the shyortcut of
// let data4 = [ ...data, ...data2]
// console.log(data3)



// merging two array with while loops
 let a = [2,34,6,3,7,342,43];
 let b = [75,87,125,4,68,19];
 let c = [];

 let i = 0;

 while (i < a.length) {
     c.push(a[i]);
     i++;
 }
 
 i = 0; 
 
 while (i < b.length) {
     c.push(b[i]);
     i++;
 }
 
 console.log(c);