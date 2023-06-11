const persons = [
    {
        name: 'Harry',
        pin: 1111,
        balance: 5000,
    },
    {
        name: 'Hermione',
        pin: 2222,
        balance: 3000,
    },
];

const [person1, person2] = persons;
console.log(person1);
console.log(person2);

document.querySelector('#log').addEventListener('click', () => {
    const user = document.querySelector('#user').value;
    const pin = document.querySelector('#pin').value;
    const transfer = document.querySelector('#transfer');

    if (user === person1.name && parseInt(pin) === person1.pin) {
        console.log('Loged In');
        document.querySelector('header').innerHTML = `Welcome Back Mr.${person1.name}`;
        document.querySelector('#show').style.opacity = '100%';
        document.querySelector('#balance').innerHTML = `$${person1.balance}`;
        transfer.style.opacity = '100%';
        document.querySelector('#transfer').style.opacity = '100%';
        document.querySelector('#loans').style.opacity = '100%';
        document.querySelector('#close').style.opacity = '100%';
    }
    if (user === person2.name && parseInt(pin) === person2.pin) {
        console.log('Loged In Person2');
        document.querySelector('header').innerHTML = `Welcome Back Mrs.${person2.name}`;
        document.querySelector('#show').style.opacity = '100%';
        document.querySelector('#balance').innerHTML = `$${person2.balance}`;
        document.querySelector('#transfer').style.opacity = '100%';
        document.querySelector('#loans').style.opacity = '100%';
        document.querySelector('#close').style.opacity = '100%';
    }

    document.querySelector('#user').value = '';
    document.querySelector('#pin').value = '';

});

document.querySelector('#user').classList.add('inp');
document.querySelector('#pin').classList.add('inp');

const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString().slice(2);

const threeDigitDate = day + ' - ' + month + ' - ' + year;

document.querySelector('#date').innerHTML = threeDigitDate;

document.querySelector('#transfer_to').classList.add('inp');
document.querySelector('#amount').classList.add('inp');
document.querySelector('#get_loan').classList.add('inp');
document.querySelector('#name').classList.add('inp');
document.querySelector('#conform_pin').classList.add('inp');

document.querySelector('#close_account').addEventListener('click', () => {
    const user = document.querySelector('#name').value;
    const pin = document.querySelector('#conform_pin').value;

    if (user === person1.name && parseInt(pin) === person1.pin) {
        document.querySelector('#show').style.opacity = '0%';
        document.querySelector('#transfer').style.opacity = '0%';
        document.querySelector('#loans').style.opacity = '0%';
        document.querySelector('#close').style.opacity = '0%';
    } else {
        document.querySelector('#show').style.opacity = '0%';
        document.querySelector('#transfer').style.opacity = '0%';
        document.querySelector('#loans').style.opacity = '0%';
        document.querySelector('#close').style.opacity = '0%';
    }
    if (user === person2.name && parseInt(pin) === person2.pin) {
        document.querySelector('#show').style.opacity = '0%';
        document.querySelector('#transfer').style.opacity = '0%';
        document.querySelector('#loans').style.opacity = '0%';
        document.querySelector('#close').style.opacity = '0%';
    };

    document.querySelector('#name').value = ' ';
    document.querySelector('#conform_pin').value = ' ';

});

document.querySelector('#loan').addEventListener('click', () => {
    let balance = parseInt(document.querySelector('#balance').innerHTML.replace('$', ''));
    let loanAmount = parseInt(document.querySelector('#get_loan').value);
    let finalBalance = balance + loanAmount;
    document.querySelector('#balance').innerHTML = `$${finalBalance}`;

    if (user === person1.name && parseInt(pin) === person1.pin) {
        person1.balance = finalBalance;
    }
    if (user === person2.name && parseInt(pin) === person2.pin) {
        person2.balance = finalBalance;
    }

    console.log(finalBalance);
    document.querySelector('#get_loan').value = ' ';
});

document.querySelector('#transfer_amount').addEventListener('click', () => {

});

document.querySelector('#transfer_amount').addEventListener('click', () => {
    const transferTo = document.querySelector('#transfer_to').value;
    const transferAmount = parseInt(document.querySelector('#amount').value);


    let sender, receiver;
    if (person1.name === transferTo) {
        sender = person2;
        receiver = person1;
    } else if (person2.name === transferTo) {
        sender = person1;
        receiver = person2;
    } else {
        console.log('Invalid recipient');
        return;
    }

    if (sender.balance >= transferAmount) {
        sender.balance -= transferAmount;
        receiver.balance += transferAmount;

        document.querySelector('#balance').innerHTML = `$${sender.balance}`;
        document.querySelector('#transaction_history').innerHTML = (`${sender.name} transferred $${transferAmount} to ${receiver.name}`);
        console.log(`${sender.name} transferred $${transferAmount} to ${receiver.name}`)
    } else {
        console.log('Insufficient balance');
    }

    document.querySelector('#transfer_to').value = '';
    document.querySelector('#amount').value = '';

});

