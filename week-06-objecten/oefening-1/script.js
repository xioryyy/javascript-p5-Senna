const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const output3 = document.getElementById('output-3');



const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    return `${this.brand} ${this.name} is gemaakt in ${this.year}.`;
  },
  isOld() {
    return this.year < 2010;
  },
  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};



output1.innerHTML = '<p>Beschrijving: ' + car.description() + '</p>';
output2.innerHTML = '<p>Is oud? ' + car.isOld() + '</p>';
output3.innerHTML = '<p>Nieuwe kilometerstand: ' + car.drive(2500) + ' km</p>';