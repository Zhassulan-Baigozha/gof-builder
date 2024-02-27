const Car = function (wheelsNum, type){
  this.wheelsNum = wheelsNum
  this.type = type
}

const CarBuilder = function (){
  let wheelsNum
  let type

  return {
    setWheelsNum: function(num) {
      this.wheelsNum = num
      return this
    },
    setType: function(str) {
      this.type = str
      return this
    },
    build: function (){
      return new Car(this.wheelsNum, this.type)
    }
  }
}

let carBuilder = new CarBuilder();
const car1 = carBuilder.setWheelsNum(4).setType('audi').build();

console.log('car1', car1);