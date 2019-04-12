let options = {
    witdh: 1024,
    height: 1024,
    name: "test",
    bool: true,
    colors: {
        border: "tomato",
        bg: "blue"
    }
};

for(let opt in options) {
    console.log(opt);
}

console.log(Object.keys(options).length);

let arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push("Ratov");
arr.shift();
arr.unshift("Kirill");

console.log(arr);