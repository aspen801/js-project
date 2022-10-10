class Time{
    constructor(hours, minutes){
        this.hours = hours;
        this.minutes = minutes;
    }
    static fromString(timeString){
        const newTime = timeString.split(':');
        return new Time(newTime[0], newTime[1]);
    }
    toString(){
        return(`${this.hours}:${this.minutes}`);
    }
}

let time = new Time(10, 15);
console.log(`The time is ${time}`); // => 'The time is 10:15'

const time2 = Time.fromString('10:23');
console.log(`The time is ${time2}`); // 'The time is 10:23'
