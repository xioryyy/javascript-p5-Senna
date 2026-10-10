const title = document.getElementById("title");
const button = document.getElementById("btn");
const section = document.getElementById("section");

let naam = "Senna";
let opleiding = "Front-end developer";
let aantalClicks = 0;
let punten = 0;

button.addEventListener("click", () => {
button.textContent = "Nog een keer klikken";

  aantalClicks++;
  punten += 10;
  section.innerHTML = `<p>Je hebt ${aantalClicks} keer geklikt en je hebt ${punten} punten</p>`;
  title.textContent = `Hallo, ik ben ${naam} en ik ben een ${opleiding}, Je hebt ${punten} punten `;
  title.classList.toggle("active");
  console.log(title.classList)
  
});
