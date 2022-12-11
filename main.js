function firstNameLetter(name) {
    alert("The name " + name + "starts with the letter " + firstLetterOfName);
}

function divisibleByTwo (x) {
    if (x % 2 === 0) {
        return true
    } else {
        return false
    }
    console.log(x)
}

const number = [8, 15, 4, 21, 33]
function largestNum(arr) {
    for(let i = 0; i < number.length; i++) {
        if(arr[0] < arr[i]) {
            arr[0] = arr[i]
        }
    }
}

console.log("The number 5 is divisible by 2: " + divisibleByTwo(5));
console.log("The number 8 is divisible by 2: " + divisibleByTwo(8));
console.log(largestNum(23, 5, 11, 6, 7))