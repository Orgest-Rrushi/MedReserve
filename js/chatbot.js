document.addEventListener("DOMContentLoaded", () => {
    // Chatbot elements
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotBox = document.getElementById("chatbot-box");
    const closeButton = document.getElementById("close-chatbot");
    const messagesContainer = document.getElementById("chatbot-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-message");

    // Enhanced responses with more context
    const botResponses = {
        sq: {
            greeting: ["Përshëndetje! Si mund t'ju ndihmoj sot?", "Mirë se vini në MedReserve! Si mund t'ju shërbej?"],
            reservation: [
                "Për të bërë një rezervim, ju lutemi vizitoni faqen tonë të rezervimeve ose klikoni 'Rezervo Tani' në menynë kryesore.",
                "Mund të rezervoni takime online në faqen tonë të rezervimeve. Dëshironi t'ju drejtoj atje?"
            ],
            // ... other categories with more responses
        },
        en: {
            greeting: ["Hello! How can I help you today?", "Welcome to MedReserve! How can I assist you?"],
            reservation: [
                "To make a reservation, please visit our booking page or click 'Book Now' in the main menu.",
                "You can book appointments online on our reservation page. Would you like me to direct you there?"
            ],
            // ... other categories with more responses
        }
    };

    // Add message to chat
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${isUser ? "user" : "bot"}`;

        const messageContent = document.createElement("div");
        messageContent.className = "message-content";
        messageContent.textContent = text;

        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Process user input with better matching
    function processUserInput(input) {
        const lang = document.documentElement.lang || "sq";
        input = input.toLowerCase();

        // Enhanced keyword matching
        if (/(përshëndetje|hello|hi|mirëdita)/i.test(input)) {
            return getRandomResponse("greeting", lang);
        } else if (/(rezervim|reservation|book|takim|appointment)/i.test(input)) {
            return getRandomResponse("reservation", lang);
        }
        // ... other conditions

        return getRandomResponse("default", lang);
    }

    // Get random response from category
    function getRandomResponse(category, lang) {
        const responses = botResponses[lang][category] || botResponses[lang].default;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, true);
        userInput.value = "";

        // Show typing indicator
        const typingIndicator = document.createElement("div");
        typingIndicator.className = "message bot typing";
        typingIndicator.textContent = "...";
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Process after a short delay
        setTimeout(() => {
            // Remove typing indicator
            messagesContainer.removeChild(typingIndicator);

            // Get and add bot response
            const response = processUserInput(message);
            addMessage(response);

            // Special actions for certain responses
            if (response.includes("faqen tonë të rezervimeve") || response.includes("reservation page")) {
                addActionButton(lang === "sq" ? "Shko te Rezervimet" : "Go to Reservations", "reservation.html");
            }
        }, 1000 + Math.random() * 1000); // Random delay for more natural feel
    }

    // Add action button to chat
    function addActionButton(text, url) {
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "message-actions";

        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", () => {
            window.location.href = url;
        });

        buttonContainer.appendChild(button);
        messagesContainer.appendChild(buttonContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Event listeners
    chatbotToggle.addEventListener("click", () => {
        chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block";
        if (chatbotBox.style.display === "block") {
            userInput.focus();
        }
    });

    closeButton.addEventListener("click", () => {
        chatbotBox.style.display = "none";
    });

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    // Initial greeting
    const lang = document.documentElement.lang || "sq";
    setTimeout(() => {
        addMessage(getRandomResponse("greeting", lang));
    }, 500);
});