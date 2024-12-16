//union types
var age = 21;
age = 23;
age = "42";
var setCoord = { x: 34, y: 33 };
setCoord = { lat: 33.34, long: 23.34 };
//union types with function
//type narrowing
var calculateTax = function (price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
};
console.log(calculateTax(2300, 0.5));
console.log("The price is ".concat(calculateTax("$2300", 0.5)));
