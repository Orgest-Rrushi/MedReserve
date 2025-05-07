document.addEventListener("DOMContentLoaded", () => {
  // Get chatbot elements
  const chatbotToggle = document.getElementById("chatbot-toggle")
  const chatbotBox = document.getElementById("chatbot-box")
  const closeButton = document.getElementById("close-chatbot")
  const messagesContainer = document.getElementById("chatbot-messages")
  const userInput = document.getElementById("user-input")
  const sendButton = document.getElementById("send-message")

  // Simple responses for the chatbot
  const botResponses = {
    sq: {
      greeting: ["Përshëndetje!", "Mirë se vini!", "Si mund t'ju ndihmoj?"],
      reservation: [
        "Për të bërë një rezervim, ju lutemi shkoni te faqja e rezervimit dhe plotësoni formularin.",
        "Mund të rezervoni një takim duke klikuar butonin 'Rezervo Tani' në faqen kryesore.",
      ],
      doctors: [
        "Mjekët tanë janë profesionistë me përvojë në fushat e tyre.",
        "Kemi specialistë në kardiologji, neurologji, stomatologji dhe oftalmologji.",
      ],
      services: [
        "Ofrojmë shërbime në kardiologji, neurologji, stomatologji dhe oftalmologji.",
        "Për më shumë informacion mbi shërbimet tona, ju lutemi vizitoni faqen e shërbimeve.",
      ],
      contact: [
        "Mund të na kontaktoni në numrin +355 69 123 4567 ose në adresën e emailit info@medreserve.al.",
        "Klinika jonë ndodhet në Rrugën e Durrësit, Tiranë, Shqipëri.",
      ],
      default: [
        "Më vjen keq, nuk e kuptoj pyetjen tuaj. A mund të jeni më specifik?",
        "Për më shumë informacion, ju lutemi kontaktoni stafin tonë.",
      ],
    },
    en: {
      greeting: ["Hello!", "Welcome!", "How can I help you?"],
      reservation: [
        "To make a reservation, please go to the reservation page and fill out the form.",
        "You can book an appointment by clicking the 'Book Now' button on the homepage.",
      ],
      doctors: [
        "Our doctors are experienced professionals in their fields.",
        "We have specialists in cardiology, neurology, dentistry, and ophthalmology.",
      ],
      services: [
        "We offer services in cardiology, neurology, dentistry, and ophthalmology.",
        "For more information about our services, please visit the services page.",
      ],
      contact: [
        "You can contact us at +355 69 123 4567 or at info@medreserve.al.",
        "Our clinic is located on Durres Street, Tirana, Albania.",
      ],
      default: [
        "I'm sorry, I don't understand your question. Can you be more specific?",
        "For more information, please contact our staff.",
      ],
    },
  }

  // Function to get a random response from a category
  function getRandomResponse(category) {
    const lang = document.documentElement.lang || "sq"
    const responses = botResponses[lang][category] || botResponses[lang].default
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Function to add a message to the chat
  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${isUser ? "user" : "bot"}`

    const messagePara = document.createElement("p")
    messagePara.textContent = text

    messageDiv.appendChild(messagePara)
    messagesContainer.appendChild(messageDiv)

    // Scroll to the bottom of the messages
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  // Function to process user input and generate a response
  function processUserInput(input) {
    input = input.toLowerCase()

    // Simple keyword matching
    if (input.includes("përshëndetje") || input.includes("hello") || input.includes("hi")) {
      return getRandomResponse("greeting")
    } else if (input.includes("rezervim") || input.includes("reservation") || input.includes("book")) {
      return getRandomResponse("reservation")
    } else if (input.includes("mjek") || input.includes("doctor")) {
      return getRandomResponse("doctors")
    } else if (input.includes("shërbim") || input.includes("service")) {
      return getRandomResponse("services")
    } else if (input.includes("kontakt") || input.includes("contact")) {
      return getRandomResponse("contact")
    } else {
      return getRandomResponse("default")
    }
  }

  // Toggle chatbot visibility
  chatbotToggle.addEventListener("click", () => {
    chatbotBox.style.display = chatbotBox.style.display === "block" ? "none" : "block"
  })

  // Close chatbot
  closeButton.addEventListener("click", () => {
    chatbotBox.style.display = "none"
  })

  // Send message on button click
  sendButton.addEventListener("click", () => {
    sendMessage()
  })

  // Send message on Enter key
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })

  // Function to send a message
  function sendMessage() {
    const message = userInput.value.trim()

    if (message) {
      // Add user message to chat
      addMessage(message, true)

      // Clear input
      userInput.value = ""

      // Simulate bot thinking
      setTimeout(() => {
        // Process user input and get response
        const response = processUserInput(message)

        // Add bot response to chat
        addMessage(response)
      }, 500)
    }
  }
})
