/*
    we use var in case we need to declare a global variable, that means a variale that accessible all over our function or all over our main progranm
    var is not scoped unlike let and const, let is used to declare a variable that scoped, that means the variable is only accessible within our if statment or loop or function,
    on the other hand const is used to declare constants, that means we use it for data that we don't need to assign again, but we can pre defined function to add/remove/edit the data
    as the const only points to the data in the memory so does let of course but so that we understand cearly what const is actualy doing.
    on the priority we should always try to use const then let then var (which we should aviod in 99.99% of cases). const then let then var.
*/

// ---------------- var -------------------------------
function varFunction(test) {

    if (test == true) {
        var info = 'var function';
    }
    console.log(info);
}
// this will work because this will translate to something like this

function varFunction(test) {
    var info = 'var function';
    if (test == true) {
    }
    console.log(info);
}

//----------------- let --------------------------

function letFunction(test) {
    let info = 'let 1';
    if (test == true) {
        let info = 'let 2';
    }
    console.log(info);
}
// this will output "let 1" as let is scoped and the other info inside the if statment is only known there

//--------------- const ------------------------------

function constFunction(test) {
    const person = { name: 'ahmed amin' };
    if (test == true) {
        // we can add data to it but we cannot reAssign it
        person['lastName'] = 'Bakhabou';
    }
    console.log(person);
    // this will ouput { name : 'ahmed amin' , lastName : 'Bakhabou}
}