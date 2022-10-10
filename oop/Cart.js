class Cart{
    items = [];
    addItem(item, count){
        this.items.push({item, count});
    }
    getItems(){
        return this.items;
    }
    getCost(){
        return this.items.reduce((accumulator, item) => {
            accumulator += item.item.price * item.count;
            return accumulator;
          }, 0)
    }
    getCount(){
       return this.items.reduce((accumulator, item) => {
            accumulator += item.count
            return accumulator;
          }, 0);

    }
}

const cart = new Cart();

cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);

console.log(cart.getItems().length);
console.log(cart.getCost());