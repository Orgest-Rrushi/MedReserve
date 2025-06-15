document.addEventListener("DOMContentLoaded", () => {
    // Get language buttons
    const langSq = document.getElementById("lang-sq");
    const langEn = document.getElementById("lang-en");

    // Translations for the website
    const translations = {
        // Albanian (default)
        sq: {
            // Navigation
            home: "Kryefaqja",
            doctors: "Mjekët",
            services: "Shërbimet",
            reservation: "Rezervimi",
            contact: "Kontakti",

            // Hero section
            "hero-title": "Kujdesi Shëndetësor i Personalizuar",
            "hero-text": "Rezervoni takimin tuaj mjekësor online në mënyrë të thjeshtë dhe të shpejtë.",
            "book-now": "Rezervo Tani",

            // ... (include all other Albanian translations from the translations file)
        },

        // English
        en: {
            // Navigation
            home: "Home",
            doctors: "Doctors",
            services: "Services",
            reservation: "Reservation",
            contact: "Contact",

            // Hero section
            "hero-title": "Personalized Healthcare",
            "hero-text": "Book your medical appointment online in a simple and fast way.",
            "book-now": "Book Now",

            // ... (include all other English translations from the translations file)
        }
    };

    // Function to update language
    function updateLanguage(lang) {
        // Update active button
        if (lang === "sq") {
            langSq.classList.add("active");
            langEn.classList.remove("active");
            document.documentElement.lang = "sq";
        } else {
            langEn.classList.add("active");
            langSq.classList.remove("active");
            document.documentElement.lang = "en";
        }

        // Get all elements with data-translate attribute
        const translatableElements = document.querySelectorAll("[data-translate]");

        // Update all translatable elements
        translatableElements.forEach((element) => {
            const key = element.getAttribute("data-translate");

            // Check if the key exists in the translations object
            if (translations[lang] && translations[lang][key]) {
                // Handle different element types
                if (element.tagName === "INPUT" && element.hasAttribute("placeholder")) {
                    element.setAttribute("placeholder", translations[lang][key]);
                } else if (element.tagName === "TEXTAREA" && element.hasAttribute("placeholder")) {
                    element.setAttribute("placeholder", translations[lang][key]);
                } else if (element.tagName === "OPTION") {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Save language preference
        localStorage.setItem("preferredLanguage", lang);

        // Update any dynamic content that might need translation
        updateDynamicContent(lang);
    }

    // Function to update dynamic content (like select options)
    function updateDynamicContent(lang) {
        // Update reservation form selects if on reservation page
        if (window.location.pathname.includes("reservation.html")) {
            const serviceSelect = document.getElementById("service");
            const doctorSelect = document.getElementById("doctor");
            const timeSelect = document.getElementById("time");

            // Update service select placeholder
            if (serviceSelect) {
                const defaultOption = serviceSelect.querySelector('option[value=""]');
                if (defaultOption) {
                    defaultOption.textContent = translations[lang]["choose-service"];
                }
            }

            // Update doctor select placeholder
            if (doctorSelect) {
                const defaultOption = doctorSelect.querySelector('option[value=""]');
                if (defaultOption) {
                    defaultOption.textContent = translations[lang]["choose-doctor"];
                }
            }

            // Update time select placeholder
            if (timeSelect) {
                const defaultOption = timeSelect.querySelector('option[value=""]');
                if (defaultOption) {
                    defaultOption.textContent = translations[lang]["choose-time"];
                }
            }
        }
    }

    // Check for saved language preference
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
        updateLanguage(savedLang);
    } else {
        // Default to Albanian if no preference is saved
        updateLanguage("sq");
    }

    // Add event listeners to language buttons
    langSq.addEventListener("click", () => {
        updateLanguage("sq");
    });

    langEn.addEventListener("click", () => {
        updateLanguage("en");
    });
});