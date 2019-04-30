// the function takes one argument and determins if the name is a moral or not 

const men = ["alrfied", "ahmed", "socrates", "max"];

const determinMoral = name => {
    const newName = (typeof name === "string") ? name : '';
    return men.reduce((exists, man) => (exists || (man === newName)), false);
}

console.log(determinMoral("socrates"));
// logs true
console.log(determinMoral());
// logs false
console.log(determinMoral("houssam"));
//also logs false

// ------------- extra credit ---------------------------


const flavors = ['vanila', 'chocolate'];

const determinFlavor = (flavors, isChocolate) => {
    if (!Array.isArray(flavors) || typeof isChocolate !== 'boolean')
        return console.log("please enter valid data: an array then a boolean");
    let text = 'this cake has ';
    const chocolate = 'chocolate';
    const actualFlavors = flavors.filter(flavor => (isChocolate && flavor === chocolate) || (!isChocolate && flavor !== chocolate));
    actualFlavors.forEach(flavor => {
        text += flavor + ' ';
    });
    console.log(text);
}

determinFlavor(flavors, true);