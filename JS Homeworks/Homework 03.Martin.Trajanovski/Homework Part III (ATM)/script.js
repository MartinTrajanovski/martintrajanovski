let accountMoney = 5689;
let userInput = prompt("How much money would you like to withdraw?")
let moneyWithdrawn= Number(userInput);
function atm (cash) {
    if ((moneyWithdrawn <= accountMoney) && (moneyWithdrawn > 0)) {
        let moneyLeft = accountMoney - moneyWithdrawn;
        return `You have successfully withdrawn ${moneyWithdrawn} denars and you have ${moneyLeft} denars remaing on your account.`;
    } else if (moneyWithdrawn > accountMoney) {
        return `Not enough money.`;
    } else {
        return `Please enter a valid amount.`
    }
} 
console.log(atm(accountMoney));