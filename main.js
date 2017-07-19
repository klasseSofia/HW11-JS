function Clock(tZone, elemId) {
    this.tZone = tZone;
    this.elemId = elemId;
};

Clock.prototype.showClock = function(){;
    var tzoneDate = new Date();
    this.hours = tzoneDate.getHours();
    this.min = tzoneDate.getMinutes();
    this.sec = tzoneDate.getSeconds();

    if(this.hours<=9) {
        this.hours = '0' + this.hours;
    }
    if(this.min<=9) {
        this.min = '0' + this.min;
    }
    if(this.sec<=9) {
        this.sec = '0' + this.sec;
    }
    var time;

    time = this.hours + ':' + this.min + ':' + this.sec;
    document.getElementById(this.elemId).innerHTML = time;
    setInterval('cTime()', 0);
}

function ClockWithMilliseconds(tZone, elemId) {
Clock.call(this, tZone, elemId)
};

ClockWithMilliseconds.prototype = Object.create(Clock.prototype);
ClockWithMilliseconds.prototype.constructor = ClockWithMilliseconds;

ClockWithMilliseconds.prototype.showClock = function () {

    var tzoneDate = new Date();
    this.hours = tzoneDate.getHours();
    this.min = tzoneDate.getMinutes();
    this.sec = tzoneDate.getSeconds();
    this.msec = tzoneDate.getMilliseconds();

    if(this.hours<=9) {
        this.hours = '0' + this.hours;
    }
    if(this.min<=9) {
        this.min = '0' + this.min;
    }
    if(this.sec<=9) {
        this.sec = '0' + this.sec;
    }

    var time;

    time = this.hours + ':' + this.min + ':' + this.sec + ':' + this.msec;
    document.getElementById(this.elemId).innerHTML=time;
    setInterval('cTime()', 0);
};

function AmericanTime (tZone, elemId) {
    Clock.call(this, tZone, elemId);
};

American.prototype = Object.create(Clock.prototype);
American.prototype.constructor = American;

American.prototype.showClock = function () {
    var tzoneDate = new Date();
    this.hours = tzoneDate.getHours();
    this.min = tzoneDate.getMinutes();
    this.sec = tzoneDate.getSeconds();
    this.msec = tzoneDate.getMilliseconds();

    if(this.hours<=9) {
        this.hours = '0' + this.hours;
    }
    if(this.min<=9) {
        this.min = '0' + this.min;
    }
    if(this.sec<=9) {
        this.sec = '0' + this.sec;
    }

    var time;

    time = this.hours + ':' + this.min + ':' + this.sec + ':' + this.msec;
    document.getElementById(this.elemId).innerHTML=time;
    setInterval('cTime()', 0);
};

function cTime() {
    var clock1 = new Clock('Current time','clock');
    clock1.showClock();

    var clock2 = new ClockWithMilliseconds('Current time with milliseconds', 'clockWithMillisec')
    clock2.showClock();

    var americanClock = new Clock('American times','americanTime');
    americanClock.showClock();
}