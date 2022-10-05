//Chiedi all’utente il suo nome

const firstname = prompt("qual è il tuo nome?");

//chiedi il suo cognome

const surname = prompt("qual è il tuo cognome?");

//chiedi il suo colore preferito

const color = prompt("qual è il tuo colore preferito?");

const currentYear = "22"

const textPsw = `${firstname + surname + color + currentYear}`;

//scrivi sulla pagina nomecognomecolorepreferito22

document.getElementById('psw').innerHTML = textPsw;
