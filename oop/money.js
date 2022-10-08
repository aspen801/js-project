function getValue(){
    return this.value;
}

function exchangeTo(currency){
    const conversion = currency === 'usd' ? 1.2 : 0.7;
    const newMoney = new Money(this.getValue() * conversion, currency); 
    return newMoney;
}

function add(money){
    const newMoney = new Money(this.getValue() + money.getValue(), this.currency);
    return newMoney;
}

function format(){
    return (this.getValue().toLocaleString('de-DE', { style: 'currency', currency: this.currency }));
}

function Money(value, currency = 'usd'){
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = getValue;
Money.prototype.exchangeTo = exchangeTo;
Money.prototype.add = add;
Money.prototype.format = format;

const money1 = new Money(100);

console.log(money1.getValue()); 
 

const money1Exchanged = money1.exchangeTo('eur'); 
 
const money2 = new Money(200, 'eur');
console.log(money2.getValue());
const money3 = money2.add(money1Exchanged);
console.log(money3.getValue());

 
console.log(money1.format()); 
console.log(money2.format()); 
 
const money5 = new Money(10000);
console.log(money5.format()); 