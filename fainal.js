
// Problem 1

function totalFine( fare ) {    
    
 if(fare>0){
   
    
const  penanty=fare+fare*0.2+30
         
         return penanty
 }
 else if (typeof fare == 'string'){
    
  return "Invalid" 
 }
         
else if(fare<0){
    return "Invalid"
}
       
}

//   Problem 3 

function  onlyCharacter( str ) {


    if(typeof str !=="string") {
     return "Invalid"
  

    }

    else     
    {

    let newstr=str.replaceAll(' ','')
    let result=newstr.toUpperCase()
   
     return result
  

}

}



// Problem 4 

function isSame(arr1, arr2) {

    if (Array.isArray(arr1) === false || Array.isArray(arr2) === false)
        return 'Invalid'


    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {

        return true
    }
    else {


        console.log('Not same')

    }
}
