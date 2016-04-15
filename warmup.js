var wrestler = {
       firstName: "Andre",
       lastName: "The Giant",
       country: "France",
       movies: ["Princess Bride", "Conan the Destroyer"],
       opponents: ["Hulk Hogan", "Ultimate Warrior"],
       pets: {
               cats: ["Mittens", "Mr. Bubbles", "Keanu"],
               dogs: {
                       corgis: ["Stallone", "Swayze", "Segal"],
                       boxers: ["Vince", "Howard", "Bob Fossil"]
          }
       }

}

console.log(wrestler.pets.dogs.corgis[1]);


var arrCompare = function(a1, a2) {
    if(a1.length === a2.length){

        for(var i=0;i<a1.length;i++){
            if(a1[i] !== a2[i]){
                return false;
            }
        }

        return true;
    }

    return false;
}

var array1 = [ "cat", "dog", "fish" ];
var array2 = [ "lion", "pointer", "trout" ];
var array3 = [ "earth", "jupiter", "mars" ];
var array4 = [ "earth", "jupiter", "mars" ];

console.log(arrCompare(array1,array2));
console.log(arrCompare(array3,array4));
