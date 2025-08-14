function  isSame(arr1 , arr2 ) {
          // You have to write your code here

        if(arr1.length===arr2.length && arr1.every((value,index) => value ===arr2[index])){
            console.log(' Same')
            return true
        }
            else{


                console.log('Not same')
                return false
            }
}



isSame( 
[1 , 4 , 5], [1 , 4 , 5])

console.log(isSame( 
[1 , 4 , 5], [1 , 4 , 5]))