function isSame(arr1, arr2) {
    // প্রথমে চেক করবো arr1 ও arr2 দুটোই অ্যারে কিনা
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // এরপর দৈর্ঘ্য ও প্রতিটি মান মিলছে কিনা চেক
    if (arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])) {
        console.log('Same');
        return true;
    } else {
        console.log('Not same');
        return false;
    }
}

isSame( 
[2 , 5 , 6] ,256   )

console.log(

isSame( 
[2 , 5 , 6] ,256   )

)