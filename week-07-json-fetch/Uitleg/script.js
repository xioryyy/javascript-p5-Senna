let carslist = document.getElementById('carslist');
// let cars = [
//   {
//     name: 'Fiat',
//     model: '500',
//     weight: '850kg',
//     color: 'White',
//   },
//   {
//     name: 'Volvo',
//     model: 'S60',
//     weight: '1200kg',
//     color: 'Grey',
//   },
//   {
//     name: 'BMW',
//     model: 'X7',
//     weight: '1350kg',
//     color: 'Black',
//   },
// ];

fetch(`./cars.json`)
.then (response => response.json())
.then (data => {
    for(let car of data){
        carslist.innerHTML += `
        <p>${car.name}</p>`
    }
})