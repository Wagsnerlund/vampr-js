class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  };

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberofVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberofVampires++;
    }
    return numberofVampires;
  };

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }
}

const aro = new Vampire("Aro", 1380);
const caiuss = new Vampire("Caiuss", 1400);
const carlisle = new Vampire("Carlisle", 1640);
const esme = new Vampire("Esme", 1921);
const edward = new Vampire("Edward", 1918);
const bella = new Vampire("Bella", 2006);

aro.addOffspring(caiuss);
aro.addOffspring(carlisle);
carlisle.addOffspring(esme);
carlisle.addOffspring(edward);
edward.addOffspring(bella);

module.exports = Vampire;