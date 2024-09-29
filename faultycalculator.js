let x = Math.random();
// console.log(x);

let a = parseInt(prompt('Enter first value'));
let b = parseInt(prompt('Enter 2nd value'));


function cal(a,b) {
   let add = a+b;
   let sub = a-b;
   let mul = a*b;
   let div = a/b;
   let exp = a**b;

   console.log("addition of a and b is",add,"Subtraction of a and b is", sub,"multiply of a and b is",mul,"division of a and b is",div);


}

function fal(a,b) {
    let add = a-b;
    let sub = a/b;
    let mul = a+b;
    let div = a**b;

    console.log("addition of a and b is",add,"Subtraction of a and b is", sub,"multiply of a and b is",mul,"division of a and b is",div);
}

if (x <0.1) {
    console.log(cal(a,b));
    console.log('faulty');


}
else{
    console.log('real');   
    console.log(cal(a,b));
}