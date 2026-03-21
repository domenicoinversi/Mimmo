const bottone = document.getElementById('ContattiBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Contatti in aggiornamento";
    messaggio.style.color = "green";
});
