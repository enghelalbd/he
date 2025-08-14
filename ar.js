// function isSame(arr1, arr2 ) 

    // if(Array.isArray(arr1)===false || Array.isArray(arr2)===false)
    // // if(Array.isArray(arr1)|| Array.isArray(arr2)){

    //     return " Invalid"

    // }
         

    function isSame(arr1,arr2){
        if(Array.isArray(arr1)===false || Array.isArray(arr2)===false)
        return 'Invalid'

  
        if(arr1.length===arr2.length && arr1.every((value,index) => value ===arr2[index])){
            console.log(' Same')
            return true
        }
            else {


                console.log('Not same')
                return false
            }

  }

// isSame([1, 2, 3] , [1 , 2 , 3])

console.log(

isSame([1, 2, 3] , [1 , 2 , 3])

)
