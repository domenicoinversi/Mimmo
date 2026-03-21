const bottone = document.getElementById('HomeBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Sito in aggiornamento!";
    messaggio.style.color = "green";
});
