// 1. Difference between two numbers
function calculateDifference(a, b) {
    return a - b;
}

console.log(calculateDifference(10, 4));

// 2. Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(7)); 
console.log(isOdd(8)); 

// 3. Find the smallest number in an array
function findMin(numbers) {
    return Math.min(...numbers);
}

console.log(findMin([5, 2, 9, 4, 7]));

// 4. Filter even numbers from an array
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 5. Sort array in descending order
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}

console.log(sortArrayDescending([5, 2, 9, 1, 7]));


// 6. Lowercase first letter of a string
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));

// 7. Find average of array elements
function findAverage(numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([10, 20, 30, 40]));

// 8. Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));