// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

let moneySupply = 550;
let waterSupply = 400;
let milkSupply = 540;
let beanSupply = 120;
let cupSupply = 9;

function printSupply() {
    console.log('The coffee machine has:\n' +
        waterSupply + ' ml of water\n' +
        milkSupply + ' ml of milk\n' +
        beanSupply + ' g of coffee beans\n' +
        cupSupply + ' disposable cups\n' +
        '$' + moneySupply + ' of money')
}

let espresso = {
    waterPerCup: 250,
    milkPerCup: 0,
    beanPerCup: 16,
    price: 4
}

let latte = {
    waterPerCup: 350,
    milkPerCup: 75,
    beanPerCup: 20,
    price: 7
}

let cappuccino = {
    waterPerCup: 200,
    milkPerCup: 100,
    beanPerCup: 12,
    price: 6
}

function buyACupOf(coffee) {
    if (waterSupply < coffee.waterPerCup) {
        console.log('Sorry, not enough water!')
        return;
    }
    if (milkSupply < coffee.milkPerCup) {
        console.log('Sorry, not enough milk!')
        return;
    }
    if (beanSupply < coffee.beanPerCup) {
        console.log('Sorry, not enough coffee beans!')
        return;
    }
    if (cupSupply < 1) {
        console.log('Sorry, not enough cups!')
        return;
    }
    waterSupply -= coffee.waterPerCup;
    milkSupply -= coffee.milkPerCup;
    beanSupply -= coffee.beanPerCup;
    cupSupply--;
    moneySupply += coffee.price;
}

function buyCoffee() {
    console.log('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:');
    let coffeeChoice = parseInt(input());
    switch (coffeeChoice) {
        case 1:
            buyACupOf(espresso);
            break;
        case 2:
            buyACupOf(latte);
            break;
        case 3:
            buyACupOf(cappuccino);
            break;
    }
}

function fillMachine() {
    console.log('Write how many ml of water you want to add:')
    waterSupply += parseInt(input());

    console.log('Write how many ml of milk you want to add:')
    milkSupply += parseInt(input());

    console.log('Write how many grams of coffee beans you want to add:')
    beanSupply += parseInt(input());

    console.log('Write how many disposable cups you want to add:')
    cupSupply += parseInt(input());
}

function takeMoney() {
    console.log('I gave you $' + moneySupply);
    moneySupply = 0;
}

while (true) {
    var finish = false;
    console.log('Write action (buy, fill, take, remaining, exit): ');
    let inputStr = input();
    switch (inputStr) {
        case 'buy':
            buyCoffee();
            break;
        case 'fill':
            fillMachine();
            break;
        case 'take':
            takeMoney();
            break;
        case 'remaining':
            printSupply();
            break;
        case 'exit':
            finish = true;
            break;
    }
    if (finish) break;
}
