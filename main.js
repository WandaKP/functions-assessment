function firstNameLetter(name) {
    let firstLetterOfName = name[0]
    alert("The name " + name + " starts with the letter " + firstLetterOfName);
}

function divisibleByTwo (x) {
    if (x % 2 === 0) {
        return true
    } else {
        return false
    }
    console.log(x)
}

function largestNum(arr) {
    let largest = [];
for (let i = 0; i < number.length; i++) {
    if (largest > arr[i]) {
        largest = arr[i];
    }
return largest
}
}

console.log("The number 5 is divisible by 2: " + divisibleByTwo(5));
console.log("The number 8 is divisible by 2: " + divisibleByTwo(8));
console.log(largestNum([15, 5, 8, 3, 7]))
firstNameLetter('Wanda')