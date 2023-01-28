
//car class
class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.speed = 0;
    }
  
    checkMotion() {
      return this.speed > 0;
    }
  
    accelerate(amount) {
      this.speed += amount;
    }
  
    break(amount) {
      this.speed -= amount;
      if (this.speed < 0) {
        this.speed = 0;
      }
    }
  
    status() {
      let motion = this.checkMotion() ? "moving" : "stopped";
      console.log(`${this.brand} ${this.model} is ${motion} at ${this.speed}km/h.`);
    }
  
    stop() {
      this.speed = 0;
    }
  }
  
  let car1 = new Car("Ford", "Mondeo");
  let car2 = new Car("BMW", "X5");
  let car3 = new Car("Tesla", "Model S");
  
  car1.accelerate(50);
  car1.status(); // "Ford Mondeo is moving at 50km/h."
  car1.break(20);
  car1.status(); // "Ford Mondeo is moving at 30km/h."
  car1.stop();
  car1.status(); // "Ford Mondeo is stopped at 0km/h."
  




// TV class
class TV {
    constructor(brand) {
      this.brand = brand;
      this.channel = 1;
      this.volume = 50;
    }
    increaseVolume() {
      if (this.volume < 100) {
        this.volume++;
      }
    }
  
    decreaseVolume() {
      if (this.volume > 0) {
        this.volume--;
      }
    }
    setChannel(channel) {
      if (channel >= 1 && channel <= 50) {
        this.channel = channel;
      }
    }
    reset() {
      this.channel = 1;
      this.volume = 50;
    }
    status() {
      return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
  }
  
  var myTv = new TV("Panasonic");
  console.log(myTv.status());
  myTv.setChannel(8);
  myTv.increaseVolume();
  console.log(myTv.status());
  myTv.reset();
  console.log(myTv.status());