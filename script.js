const bottone = document.getElementById('mioBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Complimenti! Hai appena eseguito il tuo primo script!";
    messaggio.style.color = "green";
});