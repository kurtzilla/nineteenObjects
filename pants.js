var Pants = {
    oneLeg: false,
    otherLeg: false,
    zipped: false,
    putLegInPants: function() {
        //presupppose that one leg is always first
        if(!this.oneLeg) {
            this.oneLeg = true;
            return;
        }
        if(!this.otherLeg) {
            this.otherLeg = true;
            return;
        }
    },
    zipUp: function() {
        this.zipped = true;
    },
    pantsOn: function() {
        return this.oneLeg && this.otherLeg && this.zipped;
    }
};

Pants.putLegInPants();

if(!Pants.pantsOn()){
    Pants.putLegInPants();
    console.log(Pants.oneLeg, Pants.otherLeg, Pants.zipped);
}

if(!Pants.pantsOn()){
    Pants.zipUp();
    console.log(Pants.oneLeg, Pants.otherLeg, Pants.zipped);
}

console.log('Are pants on? ' + Pants.pantsOn());
