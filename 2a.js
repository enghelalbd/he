function  onlyCharacter( str ) {


    if(typeof str !=="string") {
    //   return "Invalid"
    console.log("Invalid")

    }
// else if (typeof str=="string")
    else     
    {

    let newstr=str.replaceAll(' ','')
    let result=newstr.toUpperCase()
   
    // return result
    console.log(newstr)
      console.log(result)

}

}

onlyCharacter("Serv er : : Do wn")





