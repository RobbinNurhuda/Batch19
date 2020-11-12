
console.log("===== Soal No. 1 =====")
console.log("===== Release 0 =====")

class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this.name = name;
        this.legs = legs;
        this.cold_blooded = false;
    }
    get category(){
        return `${this.name} have ${this.legs} legs and ${this.cold_blooded} cold blooded`
    }
}

var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log(sheep.category) // shaun is a sheep have 4 legs and false cold blooded

console.log("\n")

console.log("===== Release 1 =====")
class Ape extends Animal {
    constructor(name) {
        super(name, 2);
    }
    yell(){
        console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong)
sungokong.yell() // "Auooo"

console.log("\n")

class Frog extends Animal {
    constructor(name) {
        super(name);
    }
    jump(){
        console.log("hop hop");
    }
}

var kodok = new Frog("buduk")
console.log(kodok)
kodok.jump() // "hop hop"

console.log("\n")

console.log("===== Soal No. 2 =====")

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }

  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 