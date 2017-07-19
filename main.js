function Clock(tZone, elemId) {
    this.tZone = tZone;
    this.elemId = elemId;
};

Clock.prototype.showClock = function(){
    var tzoneDateString = new Date().toLocaleString("en-US", {tZone: this.tzone});
    var tzoneDate = new Date(tzoneDateString);
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
    setInterval('cTime()', 100);
}

function ClockWithMilliseconds(tZone, elemId) {
Clock.call(this, tZone, elemId)
};

ClockWithMilliseconds.prototype = Object.create(Clock.prototype);
ClockWithMilliseconds.prototype.constructor = ClockWithMilliseconds;

ClockWithMilliseconds.prototype.showClock = function () {
    var tzoneDateString = new Date().toLocaleString("en-US", {tZone: this.tzone});
    var tzoneDate = new Date(tzoneDateString);
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
    if(this.msec<=9)  {
        this.msec = '0' + this.msec;
    }
    var time;
    time = this.hours + ':' + this.min + ':' + this.sec + ':' + this.msec;
    document.getElementById(this.elemId).innerHTML=time;
    setInterval('cTime()', 100);
};

function cTime() {
    var clock1 = new Clock('Current time','clock');
    clock1.showClock();

    var clock2 = new ClockWithMilliseconds('Current time with milliseconds', 'clockWithMillisec')
    clock2.showClock();
}