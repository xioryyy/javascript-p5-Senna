const container = document.getElementById('container');
 
const rekening = {
  eigenaar: 'Herman de Vries',
  saldo: 100,
  rekeningnummer: 'NL10INGB1231234123',
  geblokkeerd: false,
};

 
const rekeningen = [
  {
    eigenaar: 'Sanne de Vries',
    saldo: 100,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Ahmed Yilmaz',
    saldo: 2500,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
  {
    eigenaar: 'Lisa Bakker',
    saldo: 0,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: true,
  },
  {
    eigenaar: 'Tom Jansen',
    saldo: 750,
    rekeningnummer: 'NL10INGB1231234123',
    geblokkeerd: false,
  },
];
for(let rekening of rekeningen){
    // Destructuring
    const{eigenaar, saldo } = rekening;
    container.innerHTML += `
    <h2>De rekeninghouder is: ${eigenaar}</h2>
    <h3>Saldo: € ${saldo}</h3>`
}

// Spreadoperator. kopie van het object maken
const kopie = {...rekening};
kopie.eigenaar = "Herman Brood";
kopie.saldo = 1000;

const newName = {...rekening, eigenaar: "Herman De Jong"};

console.log(newName);

const nieuweRekening = rekeningen.map((rekening) => {
return {...rekening,saldo:100}

})

const verkort = rekeningen.map(rekening => ({...rekening, saldo: 100}));
console.log(verkort)
