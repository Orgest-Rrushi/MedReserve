document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const serviceSelect = document.getElementById("service")
  const doctorSelect = document.getElementById("doctor")
  const dateInput = document.getElementById("date")
  const timeSelect = document.getElementById("time")
  const appointmentForm = document.getElementById("appointment-form")

  // Doctor data by specialty
  const doctors = {
    cardiology: [
      { id: "c1", name: { sq: "Dr. Artan Gjoni", en: "Dr. Artan Gjoni" } },
      { id: "c2", name: { sq: "Dr. Elira Myftari", en: "Dr. Elira Myftari" } },
    ],
    neurology: [
      { id: "n1", name: { sq: "Dr. Besnik Hoxha", en: "Dr. Besnik Hoxha" } },
      { id: "n2", name: { sq: "Dr. Mirela Koçi", en: "Dr. Mirela Koci" } },
    ],
    dentistry: [
      { id: "d1", name: { sq: "Dr. Genta Basha", en: "Dr. Genta Basha" } },
      { id: "d2", name: { sq: "Dr. Dritan Leka", en: "Dr. Dritan Leka" } },
    ],
    ophthalmology: [
      { id: "o1", name: { sq: "Dr. Lindita Shala", en: "Dr. Lindita Shala" } },
      { id: "o2", name: { sq: "Dr. Ermal Duka", en: "Dr. Ermal Duka" } },
    ],
  }

  // Available time slots
  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ]

  // Translations (example, replace with your actual translations)
  const translations = {
    sq: {
      "choose-doctor": "Zgjidhni doktorin",
      "choose-time": "Zgjidhni orën",
    },
    en: {
      "choose-doctor": "Choose doctor",
      "choose-time": "Choose time",
    },
  }

  // Function to update doctor options based on selected service
  function updateDoctors() {
    const selectedService = serviceSelect.value
    const currentLang = document.documentElement.lang || "sq"

    // Clear current options
    doctorSelect.innerHTML = ""

    // Add default option
    const defaultOption = document.createElement("option")
    defaultOption.value = ""
    defaultOption.textContent = translations[currentLang]["choose-doctor"]
    defaultOption.setAttribute("data-translate", "choose-doctor")
    doctorSelect.appendChild(defaultOption)

    // If a service is selected, add corresponding doctors
    if (selectedService && doctors[selectedService]) {
      doctors[selectedService].forEach((doctor) => {
        const option = document.createElement("option")
        option.value = doctor.id
        option.textContent = doctor.name[currentLang]
        doctorSelect.appendChild(option)
      })
    }
  }

  // Function to update time slots
  function updateTimeSlots() {
    const currentLang = document.documentElement.lang || "sq"

    // Clear current options
    timeSelect.innerHTML = ""

    // Add default option
    const defaultOption = document.createElement("option")
    defaultOption.value = ""
    defaultOption.textContent = translations[currentLang]["choose-time"]
    defaultOption.setAttribute("data-translate", "choose-time")
    timeSelect.appendChild(defaultOption)

    // Add time slots
    timeSlots.forEach((time) => {
      const option = document.createElement("option")
      option.value = time
      option.textContent = time
      timeSelect.appendChild(option)
    })
  }

  // Set minimum date to today
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, "0")
  const dd = String(today.getDate()).padStart(2, "0")
  dateInput.min = `${yyyy}-${mm}-${dd}`

  // Event listeners
  serviceSelect.addEventListener("change", updateDoctors)

  // Form submission
  appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(appointmentForm)
    const appointmentData = {}

    for (const [key, value] of formData.entries()) {
      appointmentData[key] = value
    }

    // In a real application, you would send this data to a server
    console.log("Appointment data:", appointmentData)

    // Show confirmation message
    alert(
      document.documentElement.lang === "sq"
        ? "Rezervimi juaj u konfirmua! Do të merrni një email konfirmimi së shpejti."
        : "Your reservation has been confirmed! You will receive a confirmation email shortly.",
    )

    // Reset form
    appointmentForm.reset()
  })

  // Initialize doctors and time slots
  updateDoctors()
  updateTimeSlots()
})
