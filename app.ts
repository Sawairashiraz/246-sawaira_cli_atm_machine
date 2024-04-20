 import inquirer from "inquirer";

let myBalance = 10000; //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt({
  name: "pin",
  message: "enter your pin",
  type: "number",
});
// 12345 ===1234-false
if (pinAnswer.pin === myPin) {
  console.log("your pin is correct");

  let operationAns = await inquirer.prompt([
    {
      name: "operations",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "fast cash", "check balance"],
    }
  ]);
  //if user salect withdraw
  if (operationAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      }]);

    
    if (amountAns.amount <= myBalance) {
      let balance = myBalance - amountAns.amount;
      console.log(`The remaning balance is ${balance}`);
    }
  
 else {
    console.log('You have insufficient balance');
 }
  }
  //if user select fast cash
  else if (operationAns.operations==="fast cash"){
    let fastcashAns = await inquirer.prompt([{
        name:"amount",
        type:"list",
        choices:["1000","3000","5000","15000"]
    }]);
    if(fastcashAns.amount <= myBalance) {
        let balance2 = myBalance - fastcashAns.amount;
        console.log('the remaning balance is ${balance2}');
    }
  else{
    console.log('you have insufficient amount');
  } 
}
else if (operationAns.operations ==="check balance"){
    console.log(myBalance);
}
}
else{
  console.log("your pin is wrong");
}
