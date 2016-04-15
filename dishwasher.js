var Dishwasher = {
    powerState: false,
    cycleLed: false,
    beginCycle: function () {
        if(this.powerState) {
            console.log('begin cycle - turn on led ');
            this.cycleLed = true;
            this._rinse();
        }
    },
    _rinse: function() {
        this._dry();
    },
    _dry: function() {
        this.endCycle();
    },
    endCycle: function () {
        this.cycleLed = false;
        console.log('end of cycle - turn off led ');
    }
};

console.log(Dishwasher);
Dishwasher.powerState = true;
Dishwasher.beginCycle();


console.log(Dishwasher);
