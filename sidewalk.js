var Sidewalk = {
    strideLength: 10,
    onSidewalk: true,
    atBusstop: false,
    length: 2000,
    busstopLocation: 400,
    currentLocation: 100,
    walk: function(){
        this.currentLocation += this.strideLength;

        if(this.currentLocation >= this.busstopLocation){
            this.currentLocation = this.busstopLocation;
            this.onSidewalk = false;
            this.atBusstop = true;
        }
    }
};

console.log(Sidewalk);
var atBus = Sidewalk.atBusstop;
var locale = Sidewalk.currentLocation;
Sidewalk.strideLength = 20;
while(!atBus) {
    Sidewalk.walk();
    locale = Sidewalk.currentLocation;
    atBus = Sidewalk.atBusstop;
    console.log('location: ' + locale + ' At bus yet? ' + (atBus ? 'yes' : 'no'));
}
console.log('you made it to the bus');
