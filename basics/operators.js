// ARITHMETIC OPERATORS
let additionOp = 1+3;
let substractionOp = 6-2;
let multiplicationOp = 4*2;
let divisionOp = 4/2;
let modulusOp = 10%2;

let powerOf = 3**2;


// ASSIGNMENT OPERATORS is an equal symbol =


// COMPARISON OPERATORS
let num1 = 14;
let num2 = 10;

const GREATER_THAN = num1 > num2;
const GREATER_OR_EQUAL_TO = num1 >= num2;
const LESS_THAN = num1 > num2;
const LESS_OR_EQUAL_TO = num1 <= num2;


// EQUALITY OPERATORS
let a = 2;
let b = '2';

const LOOSE_EQUALITY = (a == b);
const STRICT_EQUALITY = (a === b);


// TERNARY OPERATORS
let terAge = 16
let canDrive = (terAge >= 16) ? true : false;


// LOGICAL OPERATORS
//OR operator ||
let hasReservation = true;
let acceptingWalkIns = false;

const HAS_ACCESS_TO_TABLE = (hasReservation || acceptingWalkIns);

//AND operator &&
let andAge = 16;
let hasCar = true;

const CAN_DRIVE = (andAge >= 16) && hasCar;

//NOT operator !
let outOfStock = false;
let isAvailable = !outOfStock;

//NULL COALESCING operator ??
let theGrade = null;
let theResult = theGrade ?? false;