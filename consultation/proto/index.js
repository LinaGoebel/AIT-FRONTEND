//-------prorotypes
const band = {
  bandType: "Rock",
};

console.log(band.bandType);
console.log(band.__proto__);

const musician = {
  isSign: true,
  isPlay: true,
  play() {
    console.log("Bum!");
  },
  __proto__: band, // <--- this is the prototype двойное нижнее подчёркивание
};

console.log(musician.bandType);
console.log(musician.__proto__);

const eltonJohn = {
  name: "Elton John",
};

eltonJohn.__proto__ = musician;
eltonJohn.play();

eltonJohn.play = () => {
  console.log("Play piano");
};

eltonJohn.play();
musician.play();

console.log(eltonJohn.bandType);

const michaelJackson = {
  name: "Michael Jackson",
};

Object.setPrototypeOf(michaelJackson, musician);
console.log(Object.getPrototypeOf(michaelJackson));

//--------------classes
class Wizard {
  constructor(nameWizard, houseWizard) {
    this.name = nameWizard;
    this.house = houseWizard;
  }

  introduce() {
    console.log(`Im ${this.name} from ${this.house}`);
  }
}

//создание экземпляра класса
const harry = new Wizard("Harry Potter", "Gryffindor");
console.log(harry);
harry.introduce();

const hermiona = new Wizard("Hermiona Granger", "Gryffindor");
hermiona.introduce();
hermiona.house = "Slytherin";
console.log(hermiona);

//Наследование классов
class DarkWizzard extends Wizard {
  constructor(nameWizard, houseWizard, darkPower) {
    super(nameWizard, houseWizard);
    this.darkPower = darkPower;
  }

  useDarkPower() {
    console.log(
      `Im ${this.name} from ${this.house} and uses dark power ${this.darkPower}`
    );
  }
}

console.log(DarkWizzard);
const voldemort = new DarkWizzard(
  "Lord Voldemort",
  "Slytherin",
  "Avada kedavra"
);

console.log(voldemort);
voldemort.useDarkPower();
voldemort.introduce();
