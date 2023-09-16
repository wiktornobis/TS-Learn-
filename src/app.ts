let age: number = 29;
age = 30;
let ageAsString: string;
ageAsString = `${age}`;

console.log(ageAsString);

// const add = (v1: number, v2: number) => v1 + v2;

// console.log(add(10, 5));

const input1Element: HTMLInputElement = document.querySelector("#input1");
const input2Element: HTMLInputElement = document.querySelector("#input2");
const addBtn = document.querySelector("button");

const add = (v1: number, v2: number) => v1 + v2;

addBtn.addEventListener("click", () => {
    const sum = add(Number(input1Element.value), Number(input2Element.value));
    console.log(sum);
})
