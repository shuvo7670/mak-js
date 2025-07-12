// Global scope - access anywhere (inside block or function scope)
const name = "My name is ali hossain";

if (true) {
    // only const and let will work for block scope but var will not work
    const age = 24; // Block scope
    var var_inside_block = "var inside block"; // this will work like a global scope
    console.log(name);
}

function ali() {
    // var, let,const can be access inside function
    // Function scope
    let height = 5.4 // Function scope
    var var_inside_function = "var inside function"; // this will work inside this function

    console.log(name);
    // End function scope
}

console.log(var_inside_function);
console.log(var_inside_block);
console.log(age);
console.log(height);


// ali();