
// --- 1. Génération automatique d’un nombre aléatoire entre 0 et 100 jusqu’à trouver entre 50 et 55
let nombre;
let tentativesAuto = 0;

do {
  nombre = Math.round(Math.random() * 100);
  console.log("Nombre généré :", nombre);
  tentativesAuto++;
} while (nombre < 50 || nombre > 55);

console.log(`Le nombre ${nombre} a été trouvé après ${tentativesAuto} tentatives.`);

// --- 2. Jeu avec l'utilisateur pour deviner ce nombre
const debut = Date.now(); // début du chrono
let essais = 0;
let proposition;

do {
  let msg = essais === 0 
    ? "Devine le nombre entre 0 et 100 :"
    : `Essaie encore ! Le nombre est ${proposition < nombre ? "plus grand" : "plus petit"} que ${proposition}`;

  proposition = parseInt(prompt(msg));
  essais++;
} while (proposition !== nombre);

const fin = Date.now(); // fin du chrono
const tempsEcoule = Math.round((fin - debut) / 1000); // en secondes

alert(`Bravo ! Tu as trouvé le nombre ${nombre} en ${essais} essais et ${tempsEcoule} secondes.`);