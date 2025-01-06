// Pobierz elementy HTML
const usernameInput = document.getElementById("username");
const submitNameButton = document.getElementById("submit-name");
const welcomeMessage = document.getElementById("welcome-message");
const messageForm = document.getElementById("message-form");
const userInput = document.getElementById("user-input");
const submitMessageButton = document.getElementById("submit-message");
const output = document.getElementById("output");

// Funkcja do odczytu zapisanych danych z LocalStorage
function loadSavedData() {
    const savedUsername = localStorage.getItem("username");
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    if (savedUsername) {
        // Przywrócenie imienia i powitania
        welcomeMessage.textContent = `Cześć, ${savedUsername}! Wpisz coś poniżej:`;
        usernameInput.value = savedUsername;
        usernameInput.disabled = true;
        submitNameButton.disabled = true;
        messageForm.style.display = "block";
    }

    // Przywrócenie zapisanych wiadomości
    savedMessages.forEach((msg) => {
        const messageElement = document.createElement("p");
        messageElement.textContent = `Użytkownik napisał: ${msg}`;
        output.appendChild(messageElement);
    });
}

// Obsługa zatwierdzenia imienia
submitNameButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
        // Zapisz imię w LocalStorage
        localStorage.setItem("username", username);

        // Zaktualizuj widok
        welcomeMessage.textContent = `Cześć, ${username}! Wpisz coś poniżej:`;
        messageForm.style.display = "block";
        usernameInput.disabled = true;
        submitNameButton.disabled = true;
    } else {
        alert("Proszę podać swoje imię.");
    }
});

// Obsługa wysyłania wiadomości
submitMessageButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Dodaj wiadomość do sekcji wyświetlania
        const messageElement = document.createElement("p");
        messageElement.textContent = `Użytkownik napisał: ${userMessage}`;
        output.appendChild(messageElement);

        // Zapisz wiadomość w LocalStorage
        const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        savedMessages.push(userMessage);
        localStorage.setItem("messages", JSON.stringify(savedMessages));

        // Wyczyszczenie pola po wysłaniu
        userInput.value = "";
    } else {
        alert("Proszę wpisać wiadomość.");
    }
});

// Wczytaj dane z LocalStorage przy uruchomieniu strony
window.addEventListener("DOMContentLoaded", loadSavedData);
