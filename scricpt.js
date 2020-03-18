console.log('Hello');
//alert('Tell me');

var b='same as other';
console.log(b);

var num = 56;
console.log(num);



//var age = prompt('What is your age?');

//document.getElementById('text').innerHTML = age;

// numbers
// increment
var num1=10;
num1++;
console.log(num1);
//decerement
num1--;
console.log(num1);

// inc dec any number you want

num1 +=10;
console.log(num1);

//function
//1. create a function
//2. call the function
function func(){
    console.log('this is a function');
}

func();

/* let's create a function that take in a name and says hello followed
by your name
*/

function greeting(){
    var name = prompt('What is your name?');
    var result = 'Hello'+ ' ' +name;
    console.log(result);

}

//greeting();

// how to arguments works

function sumNumbers(num1, num2){
    var result=num1 + num2;
    console.log(result);
}

sumNumbers(1,2);

function greet(yourName){
    var result = 'Hello' + ' ' + yourName;
    console.log(result);
}

var name = prompt('What is your Alias?');
greet(name);