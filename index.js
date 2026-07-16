// console.log("hello world")
// let name = "Anfal yaseen"
// console.log(  typeof name)
// let age = 23
// console.log(age)

// let country= "pakistan"
// console.log(country)

// let city=" duniyapur"
// console.log(city)

let num1= Number(prompt("enter a anumber:"));
let operator = (prompt("enter an operator(+, - , * , /, % :"));
let num2 =Number(prompt("emter another number:"));

switch (operator) {
case"+":
    alert(num1 + num2);
    break;
case("-"):
    alert(num1 - num2);
     break;
case("*"):
    alert(num1 * num2);
     break;
 case("/"):
    alert(num1 / num2);
    break;

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let line = "";

    // Spaces
    for (let j = 1; j <= rows - i; j++) {
        line += " ";
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        line += "*";
    }

    console.log(line);
}



    

}

