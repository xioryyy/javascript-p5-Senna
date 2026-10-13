 const container = document.getElementById('container')
const rekening = {
   
    // Properties aka eigenschappen
eigenaar:"Jayden De Vries", 
saldo: 20,
rekeningnummer: "NL10INGB24018290",
geblokkeeerd: false,
pincode: "6320",
daglimiet: 500,
transacties: [],
toonsaldo(){

return this.saldo
},

changeSaldo(amount){
this.saldo += amount

this.transacties.push(amount)

return`Het bedrag ${amount} is toegevoegd aan uw rekening`
 }
}
rekening.changeSaldo(1000)

container.innerHTML = `
<h2>${rekening.eigenaar} </h2>
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
`