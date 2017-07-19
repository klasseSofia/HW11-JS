function Clock(tZone, elemId) {
    this.tZone = tZone;
    this.elemId = elemId;
};

Clock.prototype.showClock = function(){
    this.time = new Date();
    this.hours = time.getHours();
    this.min = time.getMinutes();
    this.sec = time.getSeconds();

    if(hours<=9) {
        hours = '0' + hours;
    }
    if(min<=9) {
        min = '0' + min;
    }
    if(sec<=9) {
        sec = '0' + sec;
    }

    time = hours + ':' + min + ':' + sec;
    document.getElementById(elemId).innerHTML=time;
    setInterval('cTime()', 1000);
}

function ClockWithMilliseconds(tZone, elemId) {
Clock.call(this, tZone, elemId)
};

ClockWithMilliseconds.prototype = Object.create(Clock.prototype);
ClockWithMilliseconds.prototype.constructor = ClockWithMilliseconds;

ClockWithMilliseconds.prototype.showClock = function () {
    this.msec = time.getSeconds();

    if(msec<=9)  {
        sec = '0' + sec;
    }

    time = hours + ':' + min + ':' + sec + ':' + msec;
    document.getElementById(elemId).innerHTML=time;
    setInterval('cTime()', 1000);
};

function cTime() {
    var clock1 = new Clock('Current time','clock');
    clock1.showClock();

    var clock2 = new ClockWithMilliseconds('Current time with milliseconds', 'clockWithMillisec')
    clock2.showClock();
}