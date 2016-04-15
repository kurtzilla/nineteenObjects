var Door = {
  locked: false,
  key: '12345',
  unlockDoor: function(keyAttempt) {
    if(this.locked) {
      if(this.key === keyAttempt) {
          this.locked = false;
          return 'door is now open';
        }
      else
        return 'wrong combo, try again';
    }

    return 'door is currently open, no need to unlock';
  },
  lockDoor: function(){
    //assuming our door does not need a key to lock
    this.locked = true;
  }
};

console.log(Door);
Door.lockDoor();
console.log(Door);
console.log(Door.unlockDoor(''));
console.log(Door.unlockDoor('12345'));
console.log(Door);
