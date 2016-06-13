/*
/* Write a function with a single argument n that uses console.log
/* to print the numbers from n down to 0 without using a for loop.
 */

// Can't use a while loop either?? BOO
// This would work though, theoretically... I like it better for some reason.
function downToZero(n){
    if (!isNaN(n) && n > -1){
        do {
            console.log(n);
            n--;
        } while (n >= 0);
    } else console.log("I'm lost... " + n + " is not a number!")
}

// Here's the magic function!
function printToZero(n){
    if (!isNaN(n) && n > -1){
        console.log(n); n--; printToZero(n);
    }
}
