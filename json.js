const json = {
    "require": {
        "hemiframe/php-query-builder": "^2.1"
    }
};

const obj = { name : "Ali Hossain", age: 25 };
const jsonString = JSON.stringify(obj);
const jsonStringToObj = JSON.parse(jsonString);

console.log( jsonString );
console.log( jsonStringToObj );