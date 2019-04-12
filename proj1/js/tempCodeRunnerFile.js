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

for(let opt of options) {
    console.log(opt);
}

console.log(Object.keys(options).length);