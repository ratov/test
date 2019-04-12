// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['adf', 'fasff', 'pp', 'zzz'],
//     i = arr.join('=>');

// console.log(i);


// let arr = ['xwz', 'asaff', 'bb', 'ee'],
//     i = arr.sort();

// console.log(i);


let arr = [12, 550, 3, 7],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);