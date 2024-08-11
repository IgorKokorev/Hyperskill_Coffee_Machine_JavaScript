function sum(numbers) {
    // write your code here
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        sum += numbers[i];
    }
    return sum;
}