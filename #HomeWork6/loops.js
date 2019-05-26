
// loops HomeWork6

isPrime = (number) => {
    if (number <= 1) return false;
    for (let index = 2; index <= (number / 2); index++) {
        if (number % index == 0) return false;
    }
    return true;
}

for (let index = 0; index <= 100; index++) {
    const isMultiplierOf3And5 = (index % 3 == 0) && (index % 5 == 0);
    const isMultiplier3 = (index % 3 == 0);
    const isMultiplier5 = (index % 5 == 0);
    if (isPrime(index)) {
        console.log('prime');
    } else if (isMultiplierOf3And5) {
        console.log('FizzBuzz');
    } else if (isMultiplier3) {
        console.log('Fizz');
    } else if (isMultiplier5) {
        console.log('Buzz');
    } else {
        console.log(index);
    }
}