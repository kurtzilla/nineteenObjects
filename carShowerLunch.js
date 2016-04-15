var Car = {
  miles: 0,
  drive : function (distanceMiles) {
    this.miles += distanceMiles;
  }
};

console.log(Car);
Car.drive(20);
Car.drive(2);
Car.drive(5);
Car.drive(7);
console.log(Car);


var Shower = {
  state: 'off',//off dispensing
  getWet: function() {
    if(this.state === 'dispensing')
      return 'you are wet';

    return 'stay dry';
  }
};

console.log(Shower);
console.log(Shower.getWet());
Shower.state = 'dispensing';
console.log(Shower.getWet());

var LunchPack = {
  sandwich: false,
  banana: false,
  chips: false,
  goodToGo: function () {
    return this.sandwich && this.banana && this.chips;
  },
  packItem(item) {
    switch(item.toLowerCase()) {
      case 'sandwich':
        this.sandwich = true;
        break;
      case 'banana':
        this.banana = true;
        break;
      case 'chips':
        this.chips = true;
        break;
      case 'kitchen sink':
        this.sandwich = true;
        this.banana = true;
        this.chips = true;
        break;
    }
  }
};

console.log(LunchPack);
LunchPack.packItem('chips');
LunchPack.packItem('sandwich');
LunchPack.packItem('banana');
console.log(LunchPack.goodToGo());
