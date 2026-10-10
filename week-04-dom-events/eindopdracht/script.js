const formulier = document.querySelector("#task-form");
const invoerveld = document.querySelector("#task-input");
const takenLijst = document.querySelector("#tasks");
const teller = document.querySelector("#counter");

function toonTaken() {
	const aantalTaken = takenLijst.children.length;
	teller.textContent = aantalTaken + " taken";
}

function taakToevoegen(taakTekst) {
	const taak = document.createElement("li");
	const checkbox = document.createElement("input");
	const tekst = document.createElement("span");
	const verwijderKnop = document.createElement("button");
	checkbox.type = "checkbox";
	verwijderKnop.type = "button";
	verwijderKnop.textContent = "Verwijder";
	tekst.textContent = taakTekst;
	taak.appendChild(checkbox);
	taak.appendChild(tekst);
	taak.appendChild(verwijderKnop);
	takenLijst.appendChild(taak);

	checkbox.addEventListener("change", function () {
		if (checkbox.checked) {
			taak.classList.add("afgevinkt");
		} else {
			taak.classList.remove("afgevinkt");
		}
	});

	verwijderKnop.addEventListener("click", function () {
		taak.remove();
		toonTaken();
	});

	toonTaken();
}

formulier.addEventListener("submit", function (event) {
	event.preventDefault();

	const taakTekst = invoerveld.value.trim();
	if (taakTekst === "") {
		return;
	}

	taakToevoegen(taakTekst);
	invoerveld.value = "";
});
