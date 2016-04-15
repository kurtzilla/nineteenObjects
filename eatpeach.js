var EatPeach = {

    lbsOfFlesh: 12,
    atCore: false,


    indicateFinished: function(){
        //console.log('indicate done');
        this.atCore = true;
        return 'you have hit the core and are finished with the peach!';
    },

    checkCore: function () {
        if(this.lbsOfFlesh < 2){
            this.indicateFinished();
        }
    },

    takeBite: function(){
        console.log('chomp');
        this.lbsOfFlesh--;
        this.checkCore();
    }
};

//attempt 20 bites
for(var i=0;i<20;i++){
    //console.log(i);
    EatPeach.takeBite();

    if(EatPeach.atCore)
        break;
}
console.log(EatPeach);







// function needsCallback(value, cb)
// {
//     // Bunch of stuff
//     cb(value); // done, now run this
// }
//
// function callback(v) {
//     console.log("Original Value is" + v);
// }
//
// needsCallback(5, callback);
