const formulier = document.querySelector('#discount-form');
const bedrag = document.querySelector('#amount');
const korting = document.querySelector('#discount');
const resultaat = document.querySelector('#result');

function calculateTotal(bedrag, korting) {
	return bedrag - bedrag * korting / 100;
}

function getKlantniveau(bedrag) {
	if (bedrag < 50) return 'Nieuwe klant';
	if (bedrag <= 150) return 'Vaste klant';
	return 'VIP klant';
}

formulier.addEventListener('submit', event => {
	event.preventDefault();
	if (!bedrag.value || !korting.value) {
		resultaat.textContent = 'Vul beide velden in.';
		return;
	}

	const totaal = calculateTotal(Number(bedrag.value), Number(korting.value));
	resultaat.textContent = `Te betalen: €${totaal.toFixed(2)} - ${getKlantniveau(Number(bedrag.value))}`;
});
