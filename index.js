function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    
    this.deposit = function(amount) {
        console.log(`${amount} is deposited in your bank account ${this.accountNumber}`);
        this.balance += amount;
    }

    this.withdraw = function(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log(`${amount} is withdrawn`);
        }
    }

    this.checkBalance = function() {
        console.log(`${this.balance} is your balance`);
    }

    this.isActive = function() {
        return this.accountNumber === "2341dgqrc353";
    }
}

function promptDepositAmount() {
    let amount = parseFloat(prompt("Enter the amount to deposit:"));
    while (isNaN(amount) || amount <= 0) {
        amount = parseFloat(prompt("Invalid input. Enter a valid amount to deposit:"));
    }
    return amount;
}

function promptWithdrawalAmount() {
    let amount = parseFloat(prompt("Enter the withdrawal amount:"));
    while (isNaN(amount) || amount <= 0) {
        amount = parseFloat(prompt("Invalid input. Enter a valid withdrawal amount:"));
    }
    return amount;
}

function promptAccountNumber() {
    let number = prompt("Enter your account number:");
    // Add validation if needed
    return number;
}

let account1 = new BankAccount("2341dgqrc353", "aishh", "saving", 9);

console.log(account1);

let depositAmount = promptDepositAmount();
account1.deposit(depositAmount);

let withdrawalAmount = promptWithdrawalAmount();
account1.withdraw(withdrawalAmount);

account1.checkBalance();

let accNumber = promptAccountNumber();
if (account1.isActive(accNumber)) {
    console.log("Your account is active.");
} else {
    console.log("Your account is not active.");
}
