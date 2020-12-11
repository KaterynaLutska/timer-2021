import './styles.css';
import refs from './js/timer.js'


// function //  декларативний підхід //
let day = 'Dec 28 2020 00:00:00'

function setTime(time) {
    let days = Math.floor(time / 1000 / 60 / 60 / 24) // повертає дні
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    let sec = Math.floor((time % (1000 * 60)) / (1000))

    return { days, hours, min, sec }
}

// function myTimer(date) {
//     //  new Date(time) - перетворить в UTC (Unix)
//     //  Date.now() - теперішній час 
//     let timeBetween = new Date(date) - Date.now();
//     let x = setTime(timeBetween)

//     refs.day.textContent = x.days;
//     refs.hours.textContent = x.hours;
//     refs.min.textContent = x.min;
//     refs.sec.textContent = x.sec;    
// } 

// // add buttons 
// let interval; 
// refs.start.addEventListener('click', () => {
//     interval = setInterval(() => myTimer(day, refs), 1000)
// })

// refs.stop.addEventListener('click', () => {
//     clearInterval(interval)
//     reset(refs.day, refs.hours, refs.min, refs.sec)
// })

// clear days 
function reset (...arr) {
    return arr.map((el) => el.textContent = '00')
}
reset(refs)

// Class об'єктно-орієнтоване програмування 

let interval; 

class Timer {
    constructor(date, obj) {
        this.date = date;
        this.refs = obj;
      
       
    }
    count() {
        let x = setTime(new Date(this.date) - Date.now())
        
         this.refs.day.textContent = x.days;
         this.refs.hours.textContent = x.hours;
         this.refs.min.textContent = x.min;
         this.refs.sec.textContent = x.sec;

}
     start() {
        interval = setInterval(() => this.count(), 1000)     
    }
    stop() {
        const {day, hours, min, sec} = this.refs;
        clearInterval(interval);
        reset(day, hours, min, sec)
        
    }
}

const timer = new Timer(day, refs)


// by Class

refs.start.addEventListener('click', () => {
    timer.start()
})

refs.stop.addEventListener('click', () => {
    timer.stop()
     
} )










// my function doesn't work
// function myTimer {
//     let targetDate = new Date(date) // перетворить в UTC (Unix)
//     let currentDate = Date.now() // теперішній час 
//     let timeBetween = targetDate - currentDate;
//     console.log(timeBetween);

//     let days = Math.floor(timeBetween / 1000 / 60 / 60 / 24) // повертає дні
//     let hours = Math.floor((timeBetween / 1000 / 60 / 60) - (days * 24)) // повертає години
//     let min = Math.floor((timeBetween / 1000 / 60) - (days * 24 * 60)) // повертає хвилини 
//     let sec = Math.floor((timeBetween / 1000) - (days * 24 * 60 * 60))
    
//     console.log('days', days);
//     console.log( 'hours', hours);
//     console.log('min', min);
//     console.log('sec', sec);

//      refs.day.textContent = days;
//     refs.hours.textContent = hours;
//     refs.min.textContent = min;
//     refs.sec.textContent = sec;

// }



