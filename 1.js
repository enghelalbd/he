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

totalFine('Hello')
totalFine(-100)



console.log(totalFine('Hello'));
console.log(totalFine(100));
console.log(totalFine(-100));



