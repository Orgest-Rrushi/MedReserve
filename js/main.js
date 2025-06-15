document.addEventListener("DOMContentLoaded", () => {
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate offset based on header height
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Update copyright year
    const currentYear = new Date().getFullYear();
    document.querySelectorAll(".footer-bottom p").forEach((element) => {
        element.innerHTML = element.innerHTML.replace("2025", currentYear);
    });

    // Enhanced contact form handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const contactData = Object.fromEntries(formData.entries());

            try {
                // In a real app, you would send to a server or Supabase
                console.log("Contact form data:", contactData);

                // Show success message
                const successMessage = document.documentElement.lang === "sq"
                    ? "Mesazhi juaj u dërgua me sukses! Do t'ju kontaktojmë së shpejti."
                    : "Your message has been sent successfully! We will contact you soon.";

                alert(successMessage);
                contactForm.reset();
            } catch (error) {
                console.error("Error submitting form:", error);
                const errorMessage = document.documentElement.lang === "sq"
                    ? "Ka ndodhur një gabim. Ju lutemi provoni përsëri më vonë."
                    : "An error occurred. Please try again later.";
                alert(errorMessage);
            }
        });
    }

    // Enhanced service parameter handling for reservation page
    if (window.location.pathname.includes("reservation.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceParam = urlParams.get("service");

        if (serviceParam) {
            const serviceSelect = document.getElementById("service");
            if (serviceSelect && serviceSelect.querySelector(`option[value="${serviceParam}"]`)) {
                serviceSelect.value = serviceParam;

                // Dispatch change event to trigger doctor list update
                serviceSelect.dispatchEvent(new Event("change"));

                // Scroll to form
                setTimeout(() => {
                    document.getElementById("appointment-form").scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }, 300);
            }
        }
    }
});