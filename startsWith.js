//Write a JavaScript function to test whether a string starts with a specified string. 

function startsWith(a,b){
    
        if (a.includes(b)) {
            return 'Truthy';
        } else {
            return 'Falsy';
        }
}

console.log(startsWith('js string exercises', 'js'));
console.log(startsWith('js string exercises', 'ruby'));
console.log(startsWith('js string exercises', 'irawati'));










