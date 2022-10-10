class PasswordValidator{
    constructor({minLength = 8, containNumbers = true} = {}){
        this.minLength = minLength;
        this.containNumbers = containNumbers;
    }

    validate(password){
        const errors = {};
        if(password.length <= this.minLength){
            errors.minLength = 'password is too short';
        }
        if(!/\d/. test(password) && this.containNumbers){
            errors.containNumbers = 'password must contain numbers';
        }
        return errors;
    }
}

const validator = new PasswordValidator();
console.log(validator.validate('qwert23yyyyy'));