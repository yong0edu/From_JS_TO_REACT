



function Person(name, first, second, third){
    this.name= name;
    this.first= first;
    this.second= second;
    this.third= third;
    this.sum= function(){
        return this.first + this.second + this.third;
    }
}

var kim = new Person('kim', 10, 20 ,30);
var lee = new Person('Lee', 10, 10, 10);

console.log(kim.sum());
console.log(lee.sum());


