////////////////////////////////////
// This is a work in progress - an
// experiment in working out the quirks
// of the 'this' scope within the settimeout function
// and dealing with order of execution
////////////////////////////////////


var Thermostat = {
    currentTemp: 69,
    setTemp: function(degreeSetting){
        //get steps away from temp and adjust slowly
        var tmp = this.currentTemp - degreeSetting;
        this.adjustTemp(tmp);
    },
    adjustTemp: function(tmp) {
        if(tmp <0){
            var diff = this.currentTemp-Math.abs(tmp);
            console.log(diff);
            for(var i=this.currentTemp;i>diff;i--){
                setTimeout(function(){this.currentTemp--; console.log(this.currentTemp); }.bind(this), 2000);
            }
        }
        else if (tmp > 0){
            var diff = this.currentTemp-tmp;
            console.log(diff);
            for(var i=this.currentTemp;i<diff;i++){
                setTimeout(function(){this.currentTemp++; console.log(this.currentTemp); }.bind(this), 2000);
            }
        }
    }
};

console.log(Thermostat.currentTemp);
Thermostat.setTemp(74);

console.log(Thermostat.currentTemp);
// Thermostat.setTemp(67);
// console.log(Thermostat.currentTemp);
