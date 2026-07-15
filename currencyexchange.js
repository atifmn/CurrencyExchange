const prompt = require('prompt-sync')();

let dollar = prompt("Enter USD Amount: ")

let conv = prompt("Conversion from USD to: 1 = Euro, 2 = Peso, 3 = Rupee: ")

let dol = parseInt(dollar);

if (conv == "1"){
    console.log(dol * 0.87)
}
else if (conv == "2"){
    console.log(dol * 17.39)
}
else if (conv == "3"){
    console.log(dol * 96.29)
}
else{
    console.log("Invalid type, Try again.")
}