document.addEventListener("DOMContentLoaded", () => {
    // Form elements
    const appointmentForm = document.getElementById("appointment-form");
    const serviceSelect = document.getElementById("service");
    const doctorSelect = document.getElementById("doctor");
    const dateInput = document.getElementById("date");
    const timeSelect = document.getElementById("time");

    // Enhanced doctor data with more details
    const doctors = {
        cardiology: [
            {
                id: "c1",
                name: { sq: "Dr. Artan Gjoni", en: "Dr. Artan Gjoni" },
                specialty: { sq: "Kardiolog", en: "Cardiologist" },
                availableDays: ["Monday", "Wednesday", "Friday"]
            },
            // ... other doctors with similar structure
        ],
        // ... other specialties
    };

    // Generate time slots (9:00 AM - 4:00 PM with 30-minute intervals)
    function generateTimeSlots() {
        const slots = [];
        for (let hour = 9; hour <= 16; hour++) {
            slots.push(`${hour.toString().padStart(2, '0')}:00`);
            if (hour < 16) slots.push(`${hour.toString().padStart(2, '0')}:30`);
        }
        return slots;
    }

    // Update doctor options based on selected service
    function updateDoctors() {
        const selectedService = serviceSelect.value;
        const currentLang = document.documentElement.lang || "sq";

        // Clear current options
        doctorSelect.innerHTML = "";

        // Add default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = currentLang === "sq" ? "Zgjidhni një mjek" : "Choose a doctor";
        defaultOption.setAttribute("data-translate", "choose-doctor");
        doctorSelect.appendChild(defaultOption);

        // Add doctors if service selected
        if (selectedService && doctors[selectedService]) {
            doctors[selectedService].forEach(doctor => {
                const option = document.createElement("option");
                option.value = doctor.id;
                option.textContent = doctor.name[currentLang];
                option.dataset.specialty = doctor.specialty[currentLang];
                doctorSelect.appendChild(option);
            });
        }
    }

    // Update available time slots based on selected date
    function updateTimeSlots() {
        const selectedDate = new Date(dateInput.value);
        const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
        const currentLang = document.documentElement.lang || "sq";

        // Clear current options
        timeSelect.innerHTML = "";

        // Add default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = currentLang === "sq" ? "Zgjidhni një orë" : "Choose a time";
        defaultOption.setAttribute("data-translate", "choose-time");
        timeSelect.appendChild(defaultOption);

        // Only show times if date is valid and in the future
        if (dateInput.value && selectedDate >= new Date(new Date().setHours(0, 0, 0, 0))) {
            const timeSlots = generateTimeSlots();

            // Filter based on doctor's availability (in a real app, this would check against booked appointments)
            timeSlots.forEach(time => {
                const option = document.createElement("option");
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    }

    // Form validation
    function validateForm() {
        let isValid = true;
        const currentLang = document.documentElement.lang || "sq";

        // Check each required field
        const requiredFields = [
            { element: serviceSelect, error: currentLang === "sq" ? "Ju lutemi zgjidhni një shërbim" : "Please select a service" },
            { element: doctorSelect, error: currentLang === "sq" ? "Ju lutemi zgjidhni një mjek" : "Please select a doctor" },
            { element: dateInput, error: currentLang === "sq" ? "Ju lutemi zgjidhni një datë" : "Please select a date" },
            { element: timeSelect, error: currentLang === "sq" ? "Ju lutemi zgjidhni një orë" : "Please select a time" },
            { element: document.getElementById("name"), error: currentLang === "sq" ? "Ju lutemi shkruani emrin tuaj" : "Please enter your name" },
            { element: document.getElementById("email"), error: currentLang === "sq" ? "Ju lutemi shkruani email-in tuaj" : "Please enter your email" },
            { element: document.getElementById("phone"), error: currentLang === "sq" ? "Ju lutemi shkruani numrin e telefonit" : "Please enter your phone number" }
        ];

        requiredFields.forEach(field => {
            if (!field.element.value.trim()) {
                alert(field.error);
                field.element.focus();
                isValid = false;
                return false;
            }
        });

        return isValid;
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;

    // Event listeners
    serviceSelect.addEventListener("change", updateDoctors);
    dateInput.addEventListener("change", updateTimeSlots);

    // Form submission
    appointmentForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const formData = new FormData(appointmentForm);
        const appointmentData = Object.fromEntries(formData.entries());

        try {
            // In a real app, you would send to Supabase or your backend
            console.log("Appointment data:", appointmentData);

            // Show success message
            const successMessage = document.documentElement.lang === "sq"
                ? "Rezervimi juaj u konfirmua! Do të merrni një email konfirmimi së shpejti."
                : "Your reservation has been confirmed! You will receive a confirmation email shortly.";

            alert(successMessage);

            // Reset form
            appointmentForm.reset();

            // Update doctors and time slots
            updateDoctors();
            updateTimeSlots();
        } catch (error) {
            console.error("Error submitting appointment:", error);
            const errorMessage = document.documentElement.lang === "sq"
                ? "Ka ndodhur një gabim. Ju lutemi provoni përsëri më vonë."
                : "An error occurred. Please try again later.";
            alert(errorMessage);
        }
    });

    // Initialize
    updateDoctors();
    updateTimeSlots();
});