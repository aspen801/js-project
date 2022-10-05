const numObj = {
    number: 5,
};
const fn = function fn(number) {
  return number + this.number;
};

function myBind(obj, fn) {   
    function newFn(number){
        return fn.call(obj, number);
    } 
  
    return newFn;
}

const fnWithContext = myBind(numObj, fn);

console.log(fnWithContext(5)); 




