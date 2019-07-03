const obj = {
    "a": "Apple",
    "b": "Banana",
    "c": "Chocolate",
};

for (let i of Object.keys(obj)) {
    if (obj.hasOwnProperty(i)) {
        console.log(obj[i]);
    }
}