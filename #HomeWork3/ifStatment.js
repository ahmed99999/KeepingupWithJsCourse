
const men = [
    {
        name: "alrfied",
        age: 31
    },
    {
        name: "ahmed",
        age: 32
    },
    {
        name: "socrates",
        age: 33
    },
    {
        name: "max",
        age: 33
    }
];

const socrates = {
    name: "socrates",
    age: 33
};

const isMoral = function (man, men) {
    const menSize = men.length;
    for (let index = 0; index < menSize; index++) {
        if (man.name === men[index].name && man.age === men[index].age) {
            return true
        }
    }
    return false;
}

if (isMoral(socrates, men)) {
    console.log(`${socrates.name} is moral`);
} else {
    console.log(`${socrates.name} is not moral`);
}
//----------------------------------------------------------------------------------------


const whatTaste = function (cake, isVanila, isChocolate) {

    if (isVanila === isChocolate) {
        throw new Error('the cake can not be both vanila and chocolate');
    }

    if (isVanila === true || isChocolate == true) {
        if (!isChocolate) {
            console.log(`this ${cake} is Vanila !`);
        } else {
            console.log(`this ${cake} is chocolate`);
        }
    }
}

const isVanila = true;
const isChocolate = false;
const cake = 'New Cake';

whatTaste(cake, isVanila, isChocolate);