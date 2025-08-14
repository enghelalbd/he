function  onlyCharacter( str ) {

    let newstr=str.replaceAll(" ","")
    let upstr=newstr.toUpperCase()

    return upstr

// return newstr


//  return str.replaceAll(" ", "").toUpperCase();
   


}

onlyCharacter("Cy   bar- At  tac k  ")
console.log( onlyCharacter("Cy   bar- At  tac k  ")   )



