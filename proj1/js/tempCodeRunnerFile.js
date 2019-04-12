let arr = [12, 550, 3, 7],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);