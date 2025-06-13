document.addEventListener("DOMContentLoaded", () => {
  // Define translation dictionary with "al" for Albanian
  const translations = {
    // Albanian
    al: {
      // Navigation
      "nav-home": "Kryefaqja",
      "nav-doctors": "Mjekët",
      "nav-services": "Shërbimet",
      "nav-reservation": "Rezervimi",
      "nav-contact": "Kontakti",

      // Hero section
      "hero-title": "Kujdesi Shëndetësor i Personalizuar",
      "hero-description": "Rezervoni takimin tuaj mjekësor online në mënyrë të thjeshtë dhe të shpejtë.",
      "book-now": "Rezervo Tani",

      // Services section
      "our-services": "Shërbimet Tona",
      "cardiology": "Kardiologji",
      "cardiology-desc": "Diagnostikimi dhe trajtimi i sëmundjeve të zemrës nga specialistët tanë.",
      "neurology": "Neurologji",
      "neurology-desc": "Kujdes i specializuar për çështjet e sistemit nervor.",
      "dentistry": "Stomatologji",
      "dentistry-desc": "Shërbime dentare të plota për të gjithë familjen.",
      "ophthalmology": "Oftalmologji",
      "ophthalmology-desc": "Kujdes i specializuar për shëndetin e syve tuaj.",

      // How it works section
      "how-it-works": "Si Funksionon",
      "step1-title": "Zgjidhni Specialistin",
      "step1-desc": "Shfletoni listën e mjekëve tanë dhe zgjidhni specialistin e duhur për nevojat tuaja.",
      "step2-title": "Zgjidhni Datën dhe Orën",
      "step2-desc": "Zgjidhni një datë dhe orë që ju përshtatet nga oraret e disponueshme.",
      "step3-title": "Konfirmoni Rezervimin",
      "step3-desc": "Plotësoni të dhënat tuaja dhe konfirmoni rezervimin tuaj.",

      // Testimonials section
      "testimonials": "Çfarë Thonë Pacientët Tanë",
      "testimonial1-text": "\"Shërbim i shkëlqyer dhe staf shumë profesional. Procesi i rezervimit ishte shumë i thjeshtë.\"",
      "testimonial1-author": "- Arben Malaj",
      "testimonial2-text": "\"Mjekët janë shumë të kujdesshëm dhe të vëmendshëm. Rekomandoj këtë klinikë për të gjithë.\"",
      "testimonial2-author": "- Elona Hoxha",

      // Chatbot
      "chat-with-us": "Bisedo me Ne",
      "chatbot-welcome": "Përshëndetje! Si mund t'ju ndihmoj sot me rezervimin tuaj?",
      "type-message": "Shkruani mesazhin tuaj...",

      // Footer
      "footer-desc": "Platforma juaj e besueshme për rezervime mjekësore online.",
      "quick-links": "Lidhje të Shpejta",
      "contact-us": "Na Kontaktoni",
      "address": "Rruga e Durrësit, Tiranë, Shqipëri",
      "rights": "Të gjitha të drejtat e rezervuara.",

      // Reservation page
      "make-reservation": "Bëj një Rezervim",
      "select-service": "Zgjidhni Shërbimin",
      "choose-service": "Zgjidhni një shërbim",
      "select-doctor": "Zgjidhni Mjekun",
      "choose-doctor": "Zgjidhni një mjek",
      "select-date": "Zgjidhni Datën",
      "select-time": "Zgjidhni Orën",
      "choose-time": "Zgjidhni një orë",
      "your-name": "Emri Juaj",
      "your-email": "Email-i Juaj",
      "your-phone": "Numri i Telefonit",
      "notes": "Shënime (opsionale)",
      "confirm-reservation": "Konfirmo Rezervimin",
      "reservation-info": "Informacion për Rezervimin",
      "reservation-info-text": "Pasi të konfirmoni rezervimin tuaj, do të merrni një email konfirmimi me detajet e takimit tuaj. Ju lutemi paraqituni 15 minuta para orës së caktuar.",
      "need-help": "Keni nevojë për ndihmë?",

      // Doctors page
      "our-doctors": "Mjekët Tanë",
      "meet-our-specialists": "Njihni me Specialistët Tanë",
      "cardiologist": "Kardiolog",
      "neurologist": "Neurolog",
      "dentist": "Stomatolog",
      "ophthalmologist": "Oftalmolog",
      "artan-desc": "Dr. Gjoni ka mbi 15 vjet përvojë në diagnostikimin dhe trajtimin e sëmundjeve të zemrës. Ai është i specializuar në kardiologji intervenuese.",
      "elira-desc": "Dr. Myftari është e specializuar në kardiologji pediatrike dhe ka një përvojë të gjerë në trajtimin e problemeve kardiake tek fëmijët dhe të rriturit.",
      "besnik-desc": "Dr. Hoxha është i specializuar në trajtimin e çrregullimeve neurologjike dhe ka një përvojë të gjerë në diagnostikimin dhe trajtimin e sëmundjeve të sistemit nervor.",
      "mirela-desc": "Dr. Koçi ka një përvojë të gjerë në trajtimin e migrenës, epilepsisë dhe çrregullimeve të tjera neurologjike. Ajo është e specializuar në neurologji klinike.",
      "genta-desc": "Dr. Basha është e specializuar në stomatologji estetike dhe ka një përvojë të gjerë në trajtimin e problemeve dentare për të gjitha moshat.",
      "dritan-desc": "Dr. Leka është i specializuar në kirurgji orale dhe implantologji. Ai ka një përvojë të gjerë në trajtimin e rasteve komplekse dentare.",
      "lindita-desc": "Dr. Shala është e specializuar në trajtimin e sëmundjeve të syrit dhe ka një përvojë të gjerë në diagnostikimin dhe trajtimin e problemeve të shikimit.",
      "ermal-desc": "Dr. Duka është i specializuar në kirurgji të syrit dhe ka një përvojë të gjerë në trajtimin e kataraktit dhe glaukomës.",
      "book-appointment": "Rezervo Takim",

      // Services page
      "services-intro": "Në MedReserve, ne ofrojmë një gamë të gjerë shërbimesh mjekësore për të përmbushur nevojat tuaja shëndetësore. Ekipi ynë i mjekëve të kualifikuar është i përkushtuar për t'ju ofruar kujdesin më të mirë të mundshëm.",
      "cardiology-full-desc": "Departamenti ynë i Kardiologjisë ofron diagnostikim dhe trajtim të plotë për një gamë të gjerë të sëmundjeve kardiovaskulare. Shërbimet tona përfshijnë:",
      "cardiology-service-1": "Ekzaminime kardiake të plota",
      "cardiology-service-2": "Elektrokardiogramë (EKG)",
      "cardiology-service-3": "Ekokardiografi",
      "cardiology-service-4": "Test stresi",
      "cardiology-service-5": "Monitorim Holter",
      "cardiology-service-6": "Këshillim për parandalimin e sëmundjeve të zemrës",
      "neurology-full-desc": "Departamenti ynë i Neurologjisë ofron diagnostikim dhe trajtim për çrregullimet e sistemit nervor. Shërbimet tona përfshijnë:",
      "neurology-service-1": "Ekzaminime neurologjike të plota",
      "neurology-service-2": "Elektroencefalografi (EEG)",
      "neurology-service-3": "Elektromiografi (EMG)",
      "neurology-service-4": "Trajtim për dhimbje koke dhe migrenë",
      "neurology-service-5": "Trajtim për epilepsi",
      "neurology-service-6": "Trajtim për çrregullime të lëvizjes",
      "dentistry-full-desc": "Departamenti ynë i Stomatologjisë ofron një gamë të plotë të shërbimeve dentare për të gjithë familjen. Shërbimet tona përfshijnë:",
      "dentistry-service-1": "Kontrolle dhe pastrimi rutinë",
      "dentistry-service-2": "Mbushje dhe restaurime",
      "dentistry-service-3": "Trajtim të kanalit të rrënjës",
      "dentistry-service-4": "Ekstraksione",
      "dentistry-service-5": "Implante dentare",
      "dentistry-service-6": "Zbardhim dhëmbësh",
      "dentistry-service-7": "Ortodonci",
      "ophthalmology-full-desc": "Departamenti ynë i Oftalmologjisë ofron kujdes të plotë për shëndetin e syve tuaj. Shërbimet tona përfshijnë:",
      "ophthalmology-service-1": "Ekzaminime të plota të syve",
      "ophthalmology-service-2": "Receta për syze dhe lente kontakti",
      "ophthalmology-service-3": "Diagnostikim dhe trajtim i glaukomës",
      "ophthalmology-service-4": "Diagnostikim dhe trajtim i kataraktit",
      "ophthalmology-service-5": "Kirurgji refraktive (LASIK)",
      "ophthalmology-service-6": "Trajtim për sëmundjet e retinës",
      "book-service": "Rezervo Shërbim",
      "insurance-title": "Sigurimet Shëndetësore",
      "insurance-desc": "Ne pranojmë një gamë të gjerë të sigurimeve shëndetësore për të bërë kujdesin shëndetësor më të përballueshëm për ju.",
      "insurance-contact": "Për më shumë informacion mbi mbulimin e sigurimit, ju lutemi na kontaktoni.",

      // Contact page
      "contact-us-page": "Na Kontaktoni",
      "contact-info-title": "Informacioni i Kontaktit",
      "address-title": "Adresa",
      "address-full": "Rruga e Durrësit, Nr. 123, Tiranë, Shqipëri",
      "phone-title": "Telefoni",
      "email-title": "Email",
      "hours-title": "Orari i Punës",
      "weekdays": "E Hënë - E Premte: 08:00 - 18:00",
      "saturday": "E Shtunë: 09:00 - 14:00",
      "sunday": "E Diel: Mbyllur",
      "follow-us": "Na Ndiqni",
      "contact-form-title": "Na Dërgoni një Mesazh",
      "subject": "Subjekti",
      "message": "Mesazhi Juaj",
      "send-message": "Dërgo Mesazhin",
      "find-us": "Na Gjeni"
    },

    // English
    en: {
      // Navigation
      "nav-home": "Home",
      "nav-doctors": "Doctors",
      "nav-services": "Services",
      "nav-reservation": "Reservation",
      "nav-contact": "Contact",

      // Hero section
      "hero-title": "Personalized Healthcare",
      "hero-description": "Book your medical appointment online in a simple and fast way.",
      "book-now": "Book Now",

      // Services section
      "our-services": "Our Services",
      "cardiology": "Cardiology",
      "cardiology-desc": "Diagnosis and treatment of heart diseases by our specialists.",
      "neurology": "Neurology",
      "neurology-desc": "Specialized care for nervous system issues.",
      "dentistry": "Dentistry",
      "dentistry-desc": "Complete dental services for the whole family.",
      "ophthalmology": "Ophthalmology",
      "ophthalmology-desc": "Specialized care for your eye health.",

      // How it works section
      "how-it-works": "How It Works",
      "step1-title": "Choose a Specialist",
      "step1-desc": "Browse our list of doctors and choose the right specialist for your needs.",
      "step2-title": "Select Date and Time",
      "step2-desc": "Choose a date and time that suits you from the available slots.",
      "step3-title": "Confirm Your Reservation",
      "step3-desc": "Fill in your details and confirm your reservation.",

      // Testimonials section
      "testimonials": "What Our Patients Say",
      "testimonial1-text": "\"Excellent service and very professional staff. The booking process was very simple.\"",
      "testimonial1-author": "- John Smith",
      "testimonial2-text": "\"The doctors are very caring and attentive. I recommend this clinic to everyone.\"",
      "testimonial2-author": "- Sarah Johnson",

      // Chatbot
      "chat-with-us": "Chat with Us",
      "chatbot-welcome": "Hello! How can I help you today with your reservation?",
      "type-message": "Type your message...",

      // Footer
      "footer-desc": "Your trusted platform for online medical reservations.",
      "quick-links": "Quick Links",
      "contact-us": "Contact Us",
      "address": "Durres Street, Tirana, Albania",
      "rights": "All rights reserved.",

      // Reservation page
      "make-reservation": "Make a Reservation",
      "select-service": "Select Service",
      "choose-service": "Choose a service",
      "select-doctor": "Select Doctor",
      "choose-doctor": "Choose a doctor",
      "select-date": "Select Date",
      "select-time": "Select Time",
      "choose-time": "Choose a time",
      "your-name": "Your Name",
      "your-email": "Your Email",
      "your-phone": "Your Phone Number",
      "notes": "Notes (optional)",
      "confirm-reservation": "Confirm Reservation",
      "reservation-info": "Reservation Information",
      "reservation-info-text": "After confirming your reservation, you will receive a confirmation email with the details of your appointment. Please arrive 15 minutes before your scheduled time.",
      "need-help": "Need Help?",

      // Doctors page
      "our-doctors": "Our Doctors",
      "meet-our-specialists": "Meet Our Specialists",
      "cardiologist": "Cardiologist",
      "neurologist": "Neurologist",
      "dentist": "Dentist",
      "ophthalmologist": "Ophthalmologist",
      "artan-desc": "Dr. Gjoni has over 15 years of experience in diagnosing and treating heart diseases. He specializes in interventional cardiology.",
      "elira-desc": "Dr. Myftari specializes in pediatric cardiology and has extensive experience in treating cardiac problems in children and adults.",
      "besnik-desc": "Dr. Hoxha specializes in treating neurological disorders and has extensive experience in diagnosing and treating diseases of the nervous system.",
      "mirela-desc": "Dr. Koçi has extensive experience in treating migraines, epilepsy, and other neurological disorders. She specializes in clinical neurology.",
      "genta-desc": "Dr. Basha specializes in aesthetic dentistry and has extensive experience in treating dental problems for all ages.",
      "dritan-desc": "Dr. Leka specializes in oral surgery and implantology. He has extensive experience in treating complex dental cases.",
      "lindita-desc": "Dr. Shala specializes in treating eye diseases and has extensive experience in diagnosing and treating vision problems.",
      "ermal-desc": "Dr. Duka specializes in eye surgery and has extensive experience in treating cataracts and glaucoma.",
      "book-appointment": "Book Appointment",

      // Services page
      "services-intro": "At MedReserve, we offer a wide range of medical services to meet your healthcare needs. Our team of qualified doctors is dedicated to providing you with the best possible care.",
      "cardiology-full-desc": "Our Cardiology Department offers comprehensive diagnosis and treatment for a wide range of cardiovascular diseases. Our services include:",
      "cardiology-service-1": "Comprehensive cardiac examinations",
      "cardiology-service-2": "Electrocardiogram (ECG)",
      "cardiology-service-3": "Echocardiography",
      "cardiology-service-4": "Stress testing",
      "cardiology-service-5": "Holter monitoring",
      "cardiology-service-6": "Counseling for heart disease prevention",
      "neurology-full-desc": "Our Neurology Department offers diagnosis and treatment for disorders of the nervous system. Our services include:",
      "neurology-service-1": "Comprehensive neurological examinations",
      "neurology-service-2": "Electroencephalography (EEG)",
      "neurology-service-3": "Electromyography (EMG)",
      "neurology-service-4": "Treatment for headaches and migraines",
      "neurology-service-5": "Treatment for epilepsy",
      "neurology-service-6": "Treatment for movement disorders",
      "dentistry-full-desc": "Our Dentistry Department offers a full range of dental services for the whole family. Our services include:",
      "dentistry-service-1": "Routine check-ups and cleanings",
      "dentistry-service-2": "Fillings and restorations",
      "dentistry-service-3": "Root canal treatment",
      "dentistry-service-4": "Extractions",
      "dentistry-service-5": "Dental implants",
      "dentistry-service-6": "Teeth whitening",
      "dentistry-service-7": "Orthodontics",
      "ophthalmology-full-desc": "Our Ophthalmology Department offers comprehensive care for your eye health. Our services include:",
      "ophthalmology-service-1": "Comprehensive eye examinations",
      "ophthalmology-service-2": "Prescriptions for glasses and contact lenses",
      "ophthalmology-service-3": "Diagnosis and treatment of glaucoma",
      "ophthalmology-service-4": "Diagnosis and treatment of cataracts",
      "ophthalmology-service-5": "Refractive surgery (LASIK)",
      "ophthalmology-service-6": "Treatment for retinal diseases",
      "book-service": "Book Service",
      "insurance-title": "Health Insurance",
      "insurance-desc": "We accept a wide range of health insurance plans to make healthcare more affordable for you.",
      "insurance-contact": "For more information on insurance coverage, please contact us.",

      // Contact page
      "contact-us-page": "Contact Us",
      "contact-info-title": "Contact Information",
      "address-title": "Address",
      "address-full": "Durres Street, No. 123, Tirana, Albania",
      "phone-title": "Phone",
      "email-title": "Email",
      "hours-title": "Working Hours",
      "weekdays": "Monday - Friday: 08:00 - 18:00",
      "saturday": "Saturday: 09:00 - 14:00",
      "sunday": "Sunday: Closed",
      "follow-us": "Follow Us",
      "contact-form-title": "Send Us a Message",
      "subject": "Subject",
      "message": "Your Message",
      "send-message": "Send Message",
      "find-us": "Find Us"
    }
  };

  // Get language buttons by IDs "lang-al" and "lang-en"
  const langAl = document.getElementById("lang-al");
  const langEn = document.getElementById("lang-en");

  // Function to update language texts on page
  function updateLanguage(lang) {
    // Update active button styles and HTML lang attribute
    if (lang === "al") {
      if (langAl) langAl.classList.add("active");
      if (langEn) langEn.classList.remove("active");
      document.documentElement.lang = "al";
    } else {
      if (langEn) langEn.classList.add("active");
      if (langAl) langAl.classList.remove("active");
      document.documentElement.lang = "en";
    }

    // Update all elements with data-translate attribute
    const translatableElements = document.querySelectorAll("[data-translate]");
    translatableElements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        if ((element.tagName === "INPUT" || element.tagName === "TEXTAREA") && element.hasAttribute("placeholder")) {
          element.placeholder = translations[lang][key];
        } else if (element.tagName === "OPTION") {
          element.textContent = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });

    // Save user preference in localStorage
    localStorage.setItem("preferredLanguage", lang);
  }

  // Load saved language preference or default to Albanian
  const savedLang = localStorage.getItem("preferredLanguage") || "al";
  updateLanguage(savedLang);

  // Add event listeners for language toggle buttons
  if (langAl) langAl.addEventListener("click", () => updateLanguage("al"));
  if (langEn) langEn.addEventListener("click", () => updateLanguage("en"));
});