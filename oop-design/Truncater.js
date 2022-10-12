class Truncater{
    static defaultOptions = {
        length: 200,
        separator: '...'
    }

    static setDefaulOption(option, newOption){    
        this.defaultOptions[option] = newOption;  
        this[option] = newOption;
    }

     constructor({length = this.constructor.defaultOptions.length, separator = this.constructor.defaultOptions.separator} = {}){
        this.length = length;
        this.separator = separator;
    }


    truncate(string, {length = this.length, separator = this.separator} = {}){
        const newString = string;
        if(length < string.length){
            return newString.slice(0, length).trimEnd() + separator;
        }
        return newString;
    }   
}


const truncater = new Truncater();
Truncater.setDefaulOption('separator', '///');
console.log(truncater.truncate('Javascript and regex: remove space after the last word in a ', {separator: '....', length: 21}));
console.log(truncater.truncate('How to remove white space from the beginning or end of a', {length: 17, separator: '.......'}));
const truncater2 = new Truncater({length: 2});
console.log(truncater2.truncate('Javascript and regex: remove space after the last word in a ', ));