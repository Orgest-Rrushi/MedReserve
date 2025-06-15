document.addEventListener("DOMContentLoaded", () => {
    // Initialize Google Map
    function initMap() {
        const clinicLocation = { lat: 41.3275, lng: 19.8189 }; // Example coordinates
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: clinicLocation,
            mapTypeControl: false,
            streetViewControl: false
        });

        new google.maps.Marker({
            position: clinicLocation,
            map: map,
            title: "MedReserve Clinic"
        });

        // Map controls functionality
        document.getElementById("zoom-in").addEventListener("click", () => {
            map.setZoom(map.getZoom() + 1);
        });

        document.getElementById("zoom-out").addEventListener("click", () => {
            map.setZoom(map.getZoom() - 1);
        });

        document.getElementById("center-map").addEventListener("click", () => {
            map.setCenter(clinicLocation);
        });
    }

    // Initialize map if API is loaded
    if (typeof google !== 'undefined') {
        initMap();
    }

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Reset error messages
            document.querySelectorAll(".error-message").forEach(el => {
                el.textContent = "";
            });

            // Validate form
            let isValid = true;
            const currentLang = document.documentElement.lang || "sq";

            // Name validation
            const name = document.getElementById("name");
            if (!name.value.trim()) {
                document.getElementById("name-error").textContent =
                    currentLang === "sq" ? "Ju lutemi shkruani emrin tuaj" : "Please enter your name";
                isValid = false;
            }

            // Email validation
            const email = document.getElementById("email");
            if (!email.value.trim()) {
                document.getElementById("email-error").textContent =
                    currentLang === "sq" ? "Ju lutemi shkruani email-in tuaj" : "Please enter your email";
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                document.getElementById("email-error").textContent =
                    currentLang === "sq" ? "Ju lutemi shkruani një email valid" : "Please enter a valid email";
                isValid = false;
            }

            // Subject validation
            const subject = document.getElementById("subject");
            if (!subject.value.trim()) {
                document.getElementById("subject-error").textContent =
                    currentLang === "sq" ? "Ju lutemi shkruani subjektin" : "Please enter the subject";
                isValid = false;
            }

            // Message validation
            const message = document.getElementById("message");
            if (!message.value.trim()) {
                document.getElementById("message-error").textContent =
                    currentLang === "sq" ? "Ju lutemi shkruani mesazhin tuaj" : "Please enter your message";
                isValid = false;
            }

            if (isValid) {
                // Form submission logic (to be connected to backend)
                const formData = new FormData(contactForm);
                const contactData = Object.fromEntries(formData.entries());
                console.log("Form data:", contactData);

                // Show success message
                alert(
                    currentLang === "sq"
                        ? "Mesazhi juaj u dërgua me sukses!"
                        : "Your message has been sent successfully!"
                );

                // Reset form
                contactForm.reset();
            }
        });
    }
});