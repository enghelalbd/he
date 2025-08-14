const arr1=[1,2,3,4,5,8]
const arr2=[1,2,3,4,5,8]

// //   https://www.youtube.com/watch?v=JhNfy7GPVXg
// if(arr1.toString()===arr2.toString()){
//     console.log("Okay")
//     return true
// }
// else{

//     console.log("Not Okay")
//     return false
// }



if(arr1.length===arr2.length && arr1.every((value,index) => value  ===arr2[index]))


{

    console.log(' They Are equal')
}
else
{
    console.log(' Not Equal')
}