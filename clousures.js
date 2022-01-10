function sayHello(name) {
    return function() {
        console.log('howdy ' + name);
    }
}

let bob = sayHello('bob');
let conrad = sayHello('conrad');
let grand = sayHello('grant');

bob();
conrad();
bob();