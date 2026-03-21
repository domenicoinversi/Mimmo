const bottone = document.getElementById('ProgettiBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Progetti in aggiornamento!";
    messaggio.style.color = "green";
});
