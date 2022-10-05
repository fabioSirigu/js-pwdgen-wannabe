//Chiedi all’utente il suo nome

const Name = prompt("qual è il tuo nome?");

//chiedi il suo cognome

const Surname = prompt("qual è il tuo cognome?");

//chiedi il suo colore preferito

const Color = prompt("qual è il tuo colore preferito?");

//scrivi sulla pagina nomecognomecolorepreferito22

document.getElementById('psw').innerHTML = Name + Surname + Color + '22';
