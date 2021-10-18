// No. 1
console.log("Hello World!");
// No. 2
console.log("I'm awesome");
// No. 3
let x = 5;
// TODO -> here you initialize your variable
console.log("the value of my variable x will be: whateverYouThinkItWillLog");
// TODO -> log the actual value of x
console.log(x);
// TODO -> here you initialize your variable
console.log("the value of x will be:", x);
console.log(x);

// No. 4 
let y ="Hi my name is Isaac";
console.log("The string is stored in the variable 'y' and the value is 'Hi my name is Isaac'");
console.log(y);
y = "Hi I have changed my name!";
console.log("I think the new value of 'y' will be 'Hi I have changed my name!'");
console.log(y);

// No. 5 
let z = 7.25;
console.log(z);

let a = 8;
console.log(a)

console.log(a == z);
console.log(a > z);

let b = a;
console.log(b);

/*let z = 7.25;
console.log(z);

let a = Math.round(z);
console.log(a);

function compare(z,a){
  if (z > a) 
  {return z}
  else {return a}
}

let result = compare(z,a);
console.log(result+" is the biggest");
*/


// No. 6 Arrays 
let lists = [];
console.log("I think my array 'lists' is empty for now");
console.log(lists);

let pets = ['dog','cats','rabbits','parrot'];
console.log(pets);
pets.push("baby pig");
console.log(pets);

//No. 7
let myString = "this is a test";
console.log(myString);
console.log(myString.length);

// No 8
let first = 10;
console.log("The value of my variable first is: " + first);
let second = "hi there!";
console.log("The value of my variable second is: " + second);
let third = true;
console.log("The value of my variable third is: " + third);
let fouth = undefined;
console.log("The value of my variable fouth is: " + fouth);
console.log("The types of variables I have are: Numbers , Strings, Boolean, undefined. Theres also Null but I did not use it");
console.log(typeof first);
console.log(typeof second);
console.log(typeof third);
console.log(typeof fouth);
if(first === second || third === fouth){
    console.log('SAME TYPE');
}else{
    console.log('NOT THE SAME TYPE');
}

//No. 9
let unKnown = 7;
unKwon = unKnown % 3;
console.log(unKnown); 

let unKnown2 = 10;
unKnown2 = unKnown2 % 4;
console.log(unKnown2);

//No. 10
let mixLists = ["apples",10,];
console.log(mixLists);

console.log(6/0 === 10/0);
let answer = "From what I understand infinties comapres to another infinities will always give the value true";
console.log(answer);