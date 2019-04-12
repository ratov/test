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

let arr = ['first', 1, 2, 3, true, 4, 5];

arr.forEach(function(item, index, array) {
    console.log(index + ': ' + item + ' => ' + array );
});