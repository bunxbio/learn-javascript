let numbers = [1, 2, 3, 4, 5, 6, 7];

const userInfo = {
    name: 'Tom DeLonge',
    age: 46,
    isOnline: true,
};


//FOR loop
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(`Index: ${idx}, Value: ${numbers[idx]}`);
}

for (let num = 1; num <= 10; num++) {
    console.log(num);
}


//WHILE loop
let counter = 0;
while (true) {
    console.log("while");
    counter++

    if (counter >= 5)
        break;
}

let finalResult = 0;
while (finalResult < 5) {
    console.log(finalResult);
    finalResult++;
}


// DO-WHILE loop


//FOR-IN loop
for (const key in userInfo) {
    if (key !== 'name') {
        continue
    };
    console.log(userInfo[key]);
};


//FOR-OF loop
for (let element of numbers) {
    console.log(element);
}