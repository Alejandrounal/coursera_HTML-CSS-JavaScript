var circle = {
    radius: 10,

    getArea: function(){
        var self = this;
        console,console.log(this);

        var increaseRadius = function(){
            self.radius = 20;
        }
        increaseRadius();
        console.log(self.radius);
        return Math.PI * Math.pow(this.radius , 2);
    }
}

console.log(circle.getArea(10));

//IIFE Inmediatly invoked function expression
(function(name){
    console.log("Hi mister"  + name);
})("alejandro");

