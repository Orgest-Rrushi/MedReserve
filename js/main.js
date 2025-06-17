document.addEventListener("DOMContentLoaded", () => {
  // Placeholder for any additional JavaScript functionality
  const darkModeToggle = document.getElementById("darkmode-toggle");
  const darkModeIcon = darkModeToggle.querySelector("i");

  // Load saved dark mode preference
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
    darkModeToggle.classList.add("sun-mode");
  } else {
    darkModeToggle.classList.remove("sun-mode");
  }

  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      darkModeIcon.classList.replace("fa-moon", "fa-sun");
      darkModeToggle.classList.add("sun-mode");
    } else {
      localStorage.setItem("darkMode", "disabled");
      darkModeIcon.classList.replace("fa-sun", "fa-moon");
      darkModeToggle.classList.remove("sun-mode");
    }
  });

  // Example: Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Example: Set current year in footer copyright
  const currentYear = new Date().getFullYear()
  const copyrightElements = document.querySelectorAll(".footer-bottom p")

  copyrightElements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace("2025", currentYear)
  })

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const contactData = {}

      for (const [key, value] of formData.entries()) {
        contactData[key] = value
      }

      // In a real application, you would send this data to a server
      console.log("Contact form data:", contactData)

      // Show confirmation message
      alert(
        document.documentElement.lang === "sq"
          ? "Mesazhi juaj u dërgua me sukses! Do t'ju kontaktojmë së shpejti."
          : "Your message has been sent successfully! We will contact you soon.",
      )

      // Reset form
      contactForm.reset()
    })
  }

  // Handle service selection in URL parameters for reservation page
  if (window.location.pathname.includes("reservation.html")) {
    const urlParams = new URLSearchParams(window.location.search)
    const serviceParam = urlParams.get("service")

    if (serviceParam) {
      const serviceSelect = document.getElementById("service")
      if (serviceSelect) {
        serviceSelect.value = serviceParam

        // Trigger the change event to update doctors
        const event = new Event("change")
        serviceSelect.dispatchEvent(event)
      }
    }
  }
})
