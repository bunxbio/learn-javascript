// IF ELSE statements
let currentTime = 10;

if ((currentTime >= 6) && (currentTime < 12)) {
    console.log('Serving breakfast');
} else if ((currentTime >= 12) && (currentTime < 14)) {
    console.log('Serving lunch');
} else {
    console.log('Serving dinner');
}


// SWITCH-CASE statements
let job = 'Software Engineer';

switch (job) {
    case 'Designer':
        console.log('design something');
        break;
    case 'Software Engineer':
        console.log('write code');
        break;
    case 'Chef':
        console.log('cook');
        break;
    default:
        console.log('unemployed gang');
}