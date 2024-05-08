let participants = [];
let currentRotation = 0;

document.getElementById('addParticipant').addEventListener('click', function() {
    const participantInput = document.getElementById('participant');
    const participantName = participantInput.value.trim();

    if (participantName !== '') {
        participants.push(participantName);
        participantInput.value = '';
    }
});

document.getElementById('spinner').addEventListener('click', function() {
    if (participants.length > 1) {
        const degrees = 3600;
        const randomDegree = Math.floor(Math.random() * participants.length) * (360 / participants.length);
        const totalRotation = degrees + currentRotation + randomDegree;

        document.getElementById('wheel').style.transform = `rotate(${totalRotation}deg)`;
        currentRotation = totalRotation % 360;

        alert(`Vinner: ${participants[randomDegree / (360 / participants.length)]}`);
    } else {
        alert('Legg til minst to deltakere før du spinner.');
    }
});