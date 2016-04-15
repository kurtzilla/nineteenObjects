var Shirt = {
    wearable: false,
    cleanliness: 0,
    getShirtFromHamper: function () {
        this.cleanliness = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        if(this.isClean()){
            this.wearable = true;
        }
    },
    isClean: function () {
        return this.cleanliness > 50;
    }
};

Shirt.getShirtFromHamper();
console.log('The shirt you have selected is ' + (Shirt.wearable ? '' : 'not ') + 'wearable. (' + Shirt.cleanliness + ')');
