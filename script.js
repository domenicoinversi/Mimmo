const bottone = document.getElementById('mioBottone');
const messaggio = document.getElementById('messaggio');

bottone.addEventListener('click', () => {
    messaggio.textContent = "Complimenti! Hai appena vinto un biscotto!";
    messaggio.style.color = "White";
});
