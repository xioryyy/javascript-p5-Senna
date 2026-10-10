const vakken = document.querySelectorAll('.box');

for (const vak of vakken) {
	vak.addEventListener('click', () => {
		vak.classList.toggle('active');
	});
}
