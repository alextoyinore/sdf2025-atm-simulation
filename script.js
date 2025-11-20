// ATM Simulation using switch case
let atmOption = prompt('Welcome to the ATM!\nChoose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit')
atmOption = Number(atmOption)
let balance = 1000
switch (atmOption) {
    case 1:
        console.log('Your balance is: $' + balance)
        break
    case 2:
        let depositAmount = prompt('Enter amount to deposit: ')
        depositAmount = Number(depositAmount)
        balance += depositAmount
        console.log('Deposited: $' + depositAmount + '\nNew Balance: $' + balance)
        break
    default:
        console.log('Thank you for using the ATM. Goodbye!')
        break
}
