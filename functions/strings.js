//First class objects(function in function)

const run = (num, string) => {
    
    const takeLast = (num,string) => {
        const newString = string.slice(-num);  
        return newString.split("").reverse().join("");
    }

    return takeLast(num, string);
}

console.log(run(3, 'Hello World'));