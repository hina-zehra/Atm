#! /usr/bin/env node

import inquirer from "inquirer";

let yourBalance = 15630;
let yourPin = 2345;
console.log(`pin : ${yourPin}`);

let enterPin = await inquirer.prompt([
  { name: "pin", type: "number", message: "please enter your pin!" },
]);
if (enterPin.pin === yourPin) {
  let desOperation = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "please select desired operation",
      choices: ["withdraw", "fast cash", "check balance"],
    },
  ]);
  if (desOperation.operation === "withdraw") {
    let yourAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter your amount.",
      },
    ]);
    if (yourBalance < yourAmount.amount) {
      console.log(`Insufficient amount.`);
    } else {
      yourBalance -= yourAmount.amount;
      console.log(`your remaining balance is ${yourBalance}`);
    }
  } else if (desOperation.operation === "fast cash") {
    let fastCash = await inquirer.prompt([
      {
        name: "cash",
        message: "select one to perform operation.",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "cancel"],
      },
    ]);
    if (fastCash.cash > yourBalance) {
      console.log(`Insufficient balance`);
    } else if (fastCash.cash === "cancel") {
      console.log(`your amount is ${yourBalance} \n please remove your card`);
    } else {
      yourBalance -= fastCash.cash;
      console.log(`your remaining balance is ${yourBalance}`);
    }
    if (desOperation.operation === "check balance") {
      console.log(`your current account balance is ${yourBalance}`);
    }
  }
} else {
  console.log("incorrect pin!");
}

