// Oppdater nedtelling som før
const targetDate = new Date('December 24, 2024 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = "<h2>God jul!</h2>";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Snøfnugg-animasjon
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    const snowflake = document.createElement('div');
    const size = Math.random() * 5 + 5; // Størrelse på snøfnugg (5px til 10px)

    snowflake.classList.add('snowflake');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Fallhastighet (2-5 sekunder)
    snowflake.style.animationDelay = `${Math.random() * 2}s`;

    snowContainer.appendChild(snowflake);

    // Fjern snøfnugg etter at de er ferdige
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Generer snøfnugg kontinuerlig
setInterval(createSnowflakes, 100);
