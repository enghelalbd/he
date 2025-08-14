

function isSame(arr1,arr2){
        
        if(Array.isArray(arr1)===false || Array.isArray(arr2)===false)
        return 'Invalid' 
       

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
[1, undefined , 3] , [1,null ,3]  )

console.log(

isSame( 
[1, undefined , 3] , [1,null ,3]  )

)