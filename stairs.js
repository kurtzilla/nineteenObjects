var Stairs = {
    numSteps: 20,
    currentStep: 20,
    atBottom: function() {
        return this.currentStep == 0;
    },
    atTop: function() {
        return this.currentStep == numSteps;
    },
    inMiddle: function() {
        return (!this.atBottom()) && (!this.atTop());
    },
    stepDown: function(){
        if(this.currentStep > 0)
            this.currentStep--;
    },
    stepUp: function () {
        if(this.currentStep < 20)
            this.currentStep++;
    }
};

console.log(Stairs);
for(var i=0;i<20;i++) {
    Stairs.stepDown();
    console.log(Stairs.currentStep);
    if(Stairs.atBottom()) {
        console.log('reached the end of the flight of stairs');
        break;
    }
}
