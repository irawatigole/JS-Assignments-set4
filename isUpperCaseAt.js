// Write a JavaScript function to test whether the character at the provided (character) index is upper case. 
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt(a,b){
    c=a.toLowerCase();
    for (var i=0; i<a.length; i ++){
        if (a[b] !== c[b]){
            return true;
        } else {
            return false;
        }
    }
}
console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
console.log(isUpperCaseAt('Js String Exercises', 3));