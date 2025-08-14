function  resultReport(marks) {
    if(Array.isArray(marks)===false){

         return "Invalid"      
    }
    let finalScore=0;
    let  pass=0;
    let fail=0;
    let sum=0;
    if(marks.length===0){
       return { finalScore: 0 , pass: 0, fail: 0 }
    }
    for( let mark of marks ){
      sum=sum+mark

    if([mark]>=40){
        pass=pass+1;       
    
    }
    else if([mark]<40){
        fail=fail+1;       
    
    }    
    
      }
       
       console.log('Passed',pass)
        console.log('Failed',fail)
        console.log('Sum is:',sum)
        finalScore=Math.round(sum/marks.length)
        console.log(finalScore)

        const result=   { finalScore:finalScore,  pass:pass,fail:fail}    
        console.log(result)
        return result
        

}



 resultReport([]) 

console.log(

 resultReport([]) 
)

// return { finalScore: 0 , pass: 0, fail: 0 }