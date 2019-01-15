// Write a JavaScript function to Uncapitalize the first letter of each word of a string. 


function unCap(sentence){
sentence = sentence.split(' ');
var w= [];
sentence.forEach(function(word){
 w.push(`${word[0].toLowerCase()}${word.slice(1)}`);
    });
   return w.join(' ');
 }
 console.log(unCap('Js String Exercises'));
 console.log(unCap('JavaScript is Exceptional Scripting language for create client side web Applications'));


