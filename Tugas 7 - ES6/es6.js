
console.log("===== Soal No. 1 =====") // Soal No. 1

golden = () => { console.log("this is golden!!") }
golden()

console.log("\n")

console.log("===== Soal No. 2 =====") // Soal No. 2

newFunction = (firstName, lastName) => {
    return {
        fullName : fullname = () => {
            console.log(`${firstName} ${lastName}`);
        }
    }
}
newFunction("William", "Imoh").fullName();

console.log("\n")

console.log("===== Soal No. 3 =====") // Soal No. 3

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const { firstName, lastName, destination, occupation, spell } = newObject;

console.log(firstName, lastName, destination, occupation)

console.log("\n")

console.log("===== Soal No. 4 =====") // Soal No. 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]

console.log(combined)

console.log("\n")

console.log("===== Soal No. 5 =====") // Soal No. 5

const planet = "earth"
const view = "glass"
const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

console.log(before)