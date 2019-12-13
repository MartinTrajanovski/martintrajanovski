let accountMoney = 5689;
let userInput = prompt("How much money would you like to withdraw?");
let minimumAmount = 100;
let moneyWithdrawn = Number(userInput);
function atm(cash) {
    if ((moneyWithdrawn <= accountMoney) && (moneyWithdrawn > 0) && moneyWithdrawn >= minimumAmount) {
        accountMoney = accountMoney - moneyWithdrawn;
        return `You have successfully withdrawn ${moneyWithdrawn} denars and you have ${accountMoney} denars remaing on your account.`;
    } else if (moneyWithdrawn > accountMoney) {
        return `Not enough money.`;
    } else {
        return `Please enter a valid amount which is larger than 100 denars.`
    }
}
console.log(atm(moneyWithdrawn));

function spendAllMOney(restofmoney) {
    while (accountMoney >= minimumAmount) {
        let userChoice = prompt("How much money would you like to withdraw?")
        moneyWithdrawn = Number(userChoice);
        console.log(atm(moneyWithdrawn));
    }
    if (accountMoney < minimumAmount) {
        return `You have reached your limit!`
    }
}
console.log(spendAllMOney(accountMoney));
