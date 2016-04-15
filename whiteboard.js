var Whiteboard = {
    text: '',
    addText: function(input) {
        this.text += input;
    },
    eraseBoard: function(){
        this.text = '';
    },
    eraseHalfBoard: function(){
        var len = this.text.length;
        this.text = this.text.substr(0,Math.ceil(len/2));
    },
    getText: function() {
        return this.text;
    }
};

Whiteboard.addText('Helps Interestings Events');
Whiteboard.addText('\na special event for you');
console.log(Whiteboard.getText());
Whiteboard.eraseHalfBoard();
console.log(Whiteboard.getText());
Whiteboard.eraseBoard();
console.log(Whiteboard.getText());
