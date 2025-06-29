document.addEventListener("DOMContentLoaded", () => {
  // Get chatbot elements
  const chatbotToggle = document.getElementById("chatbot-toggle")
  const chatbotBox = document.getElementById("chatbot-box")
  const closeButton = document.getElementById("close-chatbot")
  const messagesContainer = document.getElementById("chatbot-messages")
  const userInput = document.getElementById("user-input")
  const sendButton = document.getElementById("send-message")

  loadMessages()

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

    // Save messages to localStorage
    saveMessages()
  }

  // Save messages array to localStorage
  function saveMessages() {
    const messages = []
    const messageDivs = messagesContainer.querySelectorAll(".message")
    messageDivs.forEach(div => {
      messages.push({
        text: div.textContent,
        isUser: div.classList.contains("user"),
      })
    })
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }

  // Load messages from localStorage
  function loadMessages() {
    const saved = localStorage.getItem("chatMessages")
    if (!saved) return
    const messages = JSON.parse(saved)
    messages.forEach(({ text, isUser }) => {
      addMessage(text, isUser)
    })
    // Scroll to bottom after loading
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }

  // Keyword map
  const keywords = {
    greeting: ["përshëndetje", "pershendetje", "hello", "hi", "hey"],
    reservation: ["rezervim", "reservation", "book", "appointment"],
    doctors: ["mjek", "doctor", "specialist"],
    services: ["shërbim", "sherbim", "service", "treatment"],
    contact: ["kontakt", "contact", "email", "phone"],
  }

  // Function to process user input and generate a response
  function processUserInput(input) {
    input = normalizeInput(input)
    console.log(input)
    // Simple keyword matching
    if (matchesKeyword(input, keywords.greeting)) {
      return getRandomResponse("greeting")
    } else if (matchesKeyword(input, keywords.reservation)) {
      return getRandomResponse("reservation")
    } else if (matchesKeyword(input, keywords.doctors)) {
      return getRandomResponse("doctors")
    } else if (matchesKeyword(input, keywords.services)) {
      return getRandomResponse("services")
    } else if (matchesKeyword(input, keywords.contact)) {
      return getRandomResponse("contact")
    } else {
      return getRandomResponse("default")
    }
  }

  // Normalize user input
  function normalizeInput(input) {
    return input.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  }

  // Match keywords
  function matchesKeyword(input, keywords) {
    return keywords.some(keyword => {
      const pattern = new RegExp(`\\b${keyword}\\b`, "i")
      return pattern.test(input)
    })
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
    if (!message) return

    // Disable input and send button while bot is typing
    userInput.disabled = true
    sendButton.disabled = true

    addMessage(message, true) // user message
    userInput.value = ""

    // Show typing indicator
    const typingId = "typing-indicator"
    const typingDiv = document.createElement("div")
    typingDiv.className = "message bot"
    typingDiv.id = typingId
    typingDiv.textContent = "Typing..."
    messagesContainer.appendChild(typingDiv)
    messagesContainer.scrollTop = messagesContainer.scrollHeight

    setTimeout(() => {
      // Remove typing indicator
      const typingElem = document.getElementById(typingId)
      if (typingElem) typingElem.remove()

      const response = processUserInput(message)
      addMessage(response)

      // Enable input and send button
      userInput.disabled = false
      sendButton.disabled = false

      // Focus input for next message
      userInput.focus()
    }, 1000) // 1-second delay for realism
  }
})
