document.addEventListener("DOMContentLoaded", () => {
  // Get language buttons
  const langSq = document.getElementById("lang-sq")
  const langEn = document.getElementById("lang-en")

  // Function to update language
  function updateLanguage(lang) {
    // Update active button
    if (lang === "sq") {
      langSq.classList.add("active")
      langEn.classList.remove("active")
      document.documentElement.lang = "sq"
    } else {
      langEn.classList.add("active")
      langSq.classList.remove("active")
      document.documentElement.lang = "en"
    }

    // Get all elements with data-translate attribute
    const translatableElements = document.querySelectorAll("[data-translate]")

    // Update all translatable elements
    translatableElements.forEach((element) => {
      const key = element.getAttribute("data-translate")

      // Check if the key exists in the translations object
      if (translations[lang] && translations[lang][key]) {
        // Handle different element types
        if (element.tagName === "INPUT" && element.getAttribute("placeholder")) {
          element.placeholder = translations[lang][key]
        } else if (element.tagName === "TEXTAREA" && element.getAttribute("placeholder")) {
          element.placeholder = translations[lang][key]
        } else if (element.tagName === "OPTION") {
          element.textContent = translations[lang][key]
        } else {
          element.textContent = translations[lang][key]
        }
      }
    })

    // Save language preference
    localStorage.setItem("preferredLanguage", lang)
  }

  // Check for saved language preference
  const savedLang = localStorage.getItem("preferredLanguage")
  if (savedLang) {
    updateLanguage(savedLang)
  }

  // Add event listeners to language buttons
  langSq.addEventListener("click", () => {
    updateLanguage("sq")
  })

  langEn.addEventListener("click", () => {
    updateLanguage("en")
  })
})
