var Chair = {

    height: 'low',//or high
    swivel: false,
    adjustHeightUp: function() {
        this.height = 'high';
    },
    adjustHeightDown: function() {
        this.height = 'low';
    },
    toggleSwivel: function() {
        this.swivel = !this.swivel;
    },
    isMyPreference: function() {
        return this.height === 'high' && (!this.swivel);
    },
    setToMyPreference: function() {
        this.height = 'high';
        if(this.swivel){
            this.toggleSwivel();
        }
    }
};

console.log(Chair);
if(!Chair.isMyPreference()) {
    Chair.setToMyPreference();
}
console.log(Chair.isMyPreference());
