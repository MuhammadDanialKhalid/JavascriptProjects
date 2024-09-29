function adjective() {

    let x = Math.random();
    // console.log(x);

    let a = "crazy";
    let b = "amazing";
    let c = "fire";
    if (x < 0.33) {
        // console.log(a);
        return a;
    }
    else if (x > 0.33 && x < 0.66) {
        // console.log(b);
        return b;
    }
    else if (x > 0.66) {
        // console.log(c);
        return c;
    }
    else {
        console.log('something wrong adjective');

    }

}

function shopname() {
    let x = Math.random();
    // console.log(x);

    let a = "engine ";
    let b = "food";
    let c = "garment";
    if (x < 0.33) {
        // console.log(a);
        return a;
    }
    else if (x > 0.33 && x < 0.66) {
        // console.log(b);
        return b;
    }
    else if (x > 0.66) {
        // console.log(c);
        return c;
    }
    else {
        console.log('something wrong in shopname');

    }

}

function anotherword() {
    let x = Math.random();
    // console.log(x);

    let a = "bros ";
    let b = "limited";
    let c = "hub";
    if (x < 0.33) {
        // console.log(a);
        return a;
    }
    else if (x > 0.33 && x < 0.66) {
        // console.log(b);
        return b;
    }
    else if (x > 0.66) {
        // console.log(c);
        return c;
    }
    else {
        console.log('something wrong in anotherword');

    }

}


console.log(" you can generate your business as:",adjective(), shopname(), anotherword());
console.log(`you can generate your business as :" ${adjective()} ${shopname()} ${anotherword()}"`);