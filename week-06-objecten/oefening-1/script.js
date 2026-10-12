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

const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');
const output3 = document.getElementById('output-3');

output1.textContent = 'Beschrijving: ' + car.description();
output2.textContent = 'Is oud? ' + car.isOld();
output3.textContent = 'Nieuwe kilometerstand: ' + car.drive(2500) + ' km';
