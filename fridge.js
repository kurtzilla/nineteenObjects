var Fridge = {
    shelfCount: 5,
    shelves: [],

    placeItemOnEmptyShelf: function(item) {
        if(this.shelves.length < this.shelfCount){
            var obj = {};
            obj[this.shelves.length] = item;
            // var cnt = this.shelves.length;
            this.shelves.push(obj);
            return item + ' was placed on shelf #' + this.shelves.length;
        }
        else
        return 'the fridge is full';
    },
    showInventory: function() {
        return this.shelves;
    }
};

console.log(Fridge.placeItemOnEmptyShelf('potato'));
console.log(Fridge.placeItemOnEmptyShelf('tomato'));
console.log(Fridge.placeItemOnEmptyShelf('tuna'));
console.log(Fridge.placeItemOnEmptyShelf('yogurt'));
console.log(Fridge.placeItemOnEmptyShelf('creamer'));
console.log(Fridge.placeItemOnEmptyShelf('leftovers'));

console.log(Fridge.showInventory());
