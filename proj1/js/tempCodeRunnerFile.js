let arr = ['first', 1, 2, 3, true, 4, 5];

arr.forEach(function(item, index, array) {
    console.log(index + ': ' + item + ' => ' + array[3] );
});