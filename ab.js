
let a=[1,2,22,5]
let b=1
let c='ball'
let d=false
let e=[1,2,22,5]

let result=Array.isArray(e||a)
let resl=Array.isArray(c&&a)
console.log(result)
console.log(resl)

if(Array.isArray(c)&&  Array.isArray(a)){
console.log(' Valid')

}
else{
    console.log('Not Valid')
}


// if(arr1&&arr2){
            
// }
