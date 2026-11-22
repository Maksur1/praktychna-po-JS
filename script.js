"use strict";

console.log("JavaScript успішно підключено!");

const name = "Олена";
let age = 19;
let averageScore = 88.5;
let isStudent = true;
let notDefined;
const emptyValue = null;
const bigNumber = 12345678901234567890n;
const id = Symbol("id");

console.log(name, typeof name);
console.log(age, typeof age);
console.log(averageScore, typeof averageScore);
console.log(isStudent, typeof isStudent);
console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);
console.log(bigNumber, typeof bigNumber);
console.log(id.toString(), typeof id);

function show(original, result) {
  console.log(original, typeof original, "->", result, typeof result);
}

show("125", Number("125"));
show("15.75", Number("15.75"));
show(250, String(250));
show(true, String(true));
show("false", Boolean("false"));
show(0, Boolean(0));
show(1, Boolean(1));
show(null, Number(null));
show("45px", parseInt("45px"));
show("12.5kg", parseFloat("12.5kg"));

const a = "25";
const b = "5";
const numA = Number(a);
const numB = Number(b);

console.log("Сума:", numA + numB);
console.log("Різниця:", numA - numB);
console.log("Добуток:", numA * numB);
console.log('"25" + "5" =', "25" + "5");

console.log(Number("hello"));
console.log(Number(""));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(String(null));
console.log("10" + 5);
console.log("10" - 5);
console.log(typeof null);
