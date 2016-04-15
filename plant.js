var Plant = {
    numLeaves: 5,
    hydroLevel: 15,
    needsWater: function() {
        return this.hydroLevel < 35;
    },
    addWater: function(amountInLitres){
        this.hydroLevel += amountInLitres * 4;//arbitrary calc
        this.isHappyCheck();
    },
    isHappyCheck: function() {
        var happy = this.hydroLevel > 65;
        if(happy){
            this.numLeaves++;
        }

        return happy;
    }
};

console.log(Plant.numLeaves);
var counter = 0;
while(Plant.numLeaves < 8){

    if(Plant.needsWater()){

        Plant.addWater(22);
        // console.log('added h2o');
        // console.log(Plant.hydroLevel);
        // console.log(Plant.numLeaves);
    }
    else {
        Plant.isHappyCheck()
    }

    console.log(counter++);
}
console.log(Plant.numLeaves);
