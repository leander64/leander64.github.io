function generateCard() {
    var sender = document.getElementById("sender").value;
    var message = document.getElementById("message").value;
    var receiver = document.getElementById("receiver").value;
    var selectedImage = document.getElementById("image").value;
    var backgroundColor = document.getElementById("backgroundColor").value;
    var fontColor = document.getElementById("fontColor").value;

    var card = document.getElementById("card");
    card.innerHTML = `
        <p>Til: ${receiver}</p>
        <img src="${selectedImage}" style="max-width: 100%; height: auto;">
        <p>${message}</p>
        <p>Fra: ${sender}</p>
    `;
    card.style.backgroundColor = backgroundColor;
    card.style.color = fontColor;

    // Vis resultatet og skjul skjemaet
    document.getElementById("card-form").style.display = "none";
    document.getElementById("card-result").style.display = "flex";
    card.style.display = "block";
}

function goBack() {
    // Vis skjemaet og skjul resultatet
    document.getElementById("card-form").style.display = "flex";
    document.getElementById("card-result").style.display = "none";
}