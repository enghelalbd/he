function  onlyCharacter( str ) {


    if(typeof str !=="string") {
    //   return "Invalid"
    console.log("Invalid")

    }
else if (typeof str=="string")  {

    let newstr=str.replaceAll(' ','')
    let upstr=newstr.toUpperCase()
   
    // return newstr
    console.log(newstr)
      console.log(upstr)

}

}

onlyCharacter(true)





