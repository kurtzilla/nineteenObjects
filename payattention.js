var PayAttention = {
    isFallingAsleep: function() {
        return this.liveliness < 10;
    },
    isAttentive: function() {
        return this.liveliness > 25;
    },
    isEcstatic: function() {
        return this.liveliness > 45;
    },
    liveliness: 10, //scale 1 to 50
    somethingFunny: function() {
        this.liveliness += 10;
        if(this.liveliness > 50){
            this.liveliness = 50;
        }
    },
    somethingBland: function() {
        this.liveliness -= 10;
        if(this.liveliness < 0){
            this.liveliness = 0;
        }
    },
};

console.log(PayAttention.liveliness);
for(var i=0;i<50;i++){
    PayAttention.somethingFunny();
    console.log(PayAttention.isFallingAsleep(), PayAttention.isAttentive(), PayAttention.isEcstatic());
    if(PayAttention.isEcstatic()){
        console.log('you are so psyched!');
        break;
    }
}
for(var i=0;i<50;i++){
    PayAttention.somethingBland();
    console.log(PayAttention.isFallingAsleep(), PayAttention.isAttentive(), PayAttention.isEcstatic());
    if(PayAttention.isFallingAsleep()){
        console.log('go to bed!');
        break;
    }
}
