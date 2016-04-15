var GetOnBus = {
    busIsOpen: false,
    allowedSeating: false,
    requestBusOpen: function() {
        this.busIsOpen = true;
    },
    presentBusPass: function() {
        if(this.busIsOpen)
            this.allowedSeating = true;
        else
            return 'bus is not open';
    },
    sitDown: function() {
        if(this.allowedSeating)
            return 'enjoy the ride';

        var errs = [];
        if(!this.busIsOpen)
            errs.push('bus is not open');

        if(!this.allowedSeating)
            errs.push('please present your bus pass');

        return errs;
    }
};

//console.log(GetOnBus);
console.log(GetOnBus.sitDown());
console.log(GetOnBus.presentBusPass());
console.log(GetOnBus.sitDown());
GetOnBus.requestBusOpen();
console.log(GetOnBus.sitDown());
