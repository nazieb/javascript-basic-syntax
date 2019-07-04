const add = (num1, num2) => num1 + num2;

console.log(add(1, 2));

const div = (num1, num2) => {
    if (num2 === 0) {
        console.log("Error!");
    } else {
        return num1 / num2;
    }
}

console.log(div(4, 2));
console.log(div(4, 0));

const square = num => num * num;

console.log(square(3));