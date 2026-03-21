const bottone = document.getElementById('mioBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Complimenti Robi! Hai appena vinto un bacino!";
    messaggio.style.color = "green";
});