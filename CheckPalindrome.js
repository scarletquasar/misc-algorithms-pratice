function checkPalindrome(number) {
    if (number < 0)
        return false;

    if (Number.isInteger(number / 10))
        return false;

    if (number < 10)
        return true;

    const string = number.toString();

    if (string.length % 2 == 0) {
        let left = string.slice(string.length / 2);
        let right = string
            .slice(-(string.length / 2))
            .split()
            .reverse()
            .join();

        if (left === right)
            return true;

        return false;
    } 

    const middleIndex = Math.floor(string.length / 2);
    const middleNumber = string[middleIndex];
    const values = string.split(middleNumber);
    const left = values[0];
    const right = values[0]
        .split()
        .reverse()
        .join();

    if (left === right)
        return true;

    return false;
}

console.time("Just reversing - true")
console.log(1001..toString().split().reverse().join() == 1001);
console.timeEnd("Just reversing - true")

console.time("checkPalindrome - true")
console.log(checkPalindrome(1001))
console.timeEnd("checkPalindrome - true")

console.time("Just reversing - true 1 char")
console.log(1..toString().split().reverse().join() == 1);
console.timeEnd("Just reversing - true 1 char")

console.time("checkPalindrome - true 1 char")
console.log(checkPalindrome(1))
console.timeEnd("checkPalindrome - true 1 char")

console.time("Just reversing - (false positive) negative")
console.log(-10..toString().split().reverse().join() == -10);
console.timeEnd("Just reversing - (false positive) negative")

console.time("checkPalindrome - false negative")
console.log(checkPalindrome(-10))
console.timeEnd("checkPalindrome - false negative")

console.time("Just reversing - (false positive) ends with zero")
console.log(100..toString().split().reverse().join() == 100);
console.timeEnd("Just reversing - (false positive) ends with zero")

console.time("checkPalindrome - false ends with zero")
console.log(checkPalindrome(100))
console.timeEnd("checkPalindrome - false ends with zero")