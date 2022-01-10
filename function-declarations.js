// function sayHello () { //function declaration
//     console.log('------------'); //function body
//     console.log('hello!');
//     console.log('------------');
// }

// sayHello();
// invocing function

// let a = sayHello;
// a();
// a();
// a();


// function sayHello (name) { // argument
//     console.log('------------'); //function body
//     console.log('hello ' + name + '!');
//     console.log('------------');
// }

// sayHello('bob');
// sayHello('beth');
// sayHello('Mr Tibbles');


function calculateTax(amount) {
    let result = amount * 0.089;
    return result;
}

let tax = calculateTax(100);
console.log(tax);

