var GetWater = {
    haveCup: false,
    cupCapacity: 20,
    cupCurrentFullness: 0,
    isCupFull: function() {
        return this.cupCurrentFullness == this.cupCapacity;
    },
    getCup: function() {
        this.haveCup = true;
    },
    fillCup: function () {
        if(!this.haveCup) {
            this.getCup();
            //console.log('got a cup');
        }

        for(var i=this.cupCurrentFullness;i<=this.cupCapacity;i++){
            this.cupCurrentFullness++;
            //console.log(this.cupCurrentFullness);

            if(this.isCupFull()){
                //console.log('filled');
                return this.stopFilling();
                break;
            }
        }
    },
    stopFilling: function() {

        return 'Your cup is full';
    }

};

console.log(GetWater);
console.log(GetWater.fillCup());
