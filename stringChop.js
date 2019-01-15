// Write a JavaScript function to chop a string into chunks of a given length. 
// console.log(stringChop('resource')); 
// return ["resource"]

// console.log(stringChop('resource',2)); 
// return [ "re", "so", "ur", "ce"] 

// console.log(stringChop('dcresource',3));
//  return ["dcr", "eso", "urc", "e"]

 function stringChop(a,b){
     var w =[];
     for (var i=0; i < a.length; i ++) {
         
        c= a.substr(i,b);
        i= i+b-1;
       w.push(c);
     }
     return w;
    
 }
 console.log(stringChop('resource',2)); 
 console.log(stringChop('dcresource',3));



