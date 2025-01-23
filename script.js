// Language Toggle Script
const languageToggleButton = document.getElementById('language-toggle-button');
let currentLanguage = 'es'; // Default language is Spanish

const translations = {
    es: {
        title: "Plataforma de Reporte Anónimo",
        reporterName: "Nombre:",
        reporterNamePlaceholder: "Ingrese su nombre",
        reporterLocation: "Ubicación en Colorado Springs:",
        reporterLocationPlaceholder: "Ingrese su ubicación",
        crimeType: "Tipo de Delito:",
        crimeTypePlaceholder: "Seleccione el tipo de delito",
        crimeOptions: {
            theft: "Robo",
            assault: "Asalto",
            fraud: "Fraude",
            other: "Otro"
        },
        additionalDetails: "Detalles Adicionales:",
        additionalDetailsPlaceholder: "Proporcione detalles adicionales aquí...",
        disclaimer: "* No incluya detalles personales sobre usted mismo en el reporte.",
        note: "* El individuo reportado será investigado de manera discreta.",
        submitButton: "Enviar Reporte",
        footer: "© 2025 Plataforma de Reporte Anónimo. Todos los derechos reservados.",
        formLegend: "Detalles del Reporte",
        languageToggle: "English",
        disclaimerTitle: "Aviso Legal y de Privacidad",
        disclaimerText: "Todos los reportes realizados a través de esta plataforma son completamente anónimos y serán tratados con la máxima confidencialidad. Nos comprometemos a investigar cada reporte de manera discreta y profesional, garantizando la protección de la identidad de quienes realizan los reportes.",
        infoTitle: "¿Cómo Funciona?",
        infoText: "Nuestra plataforma le permite reportar actividades delictivas o sospechosas de manera anónima. Simplemente complete el formulario de reporte con los detalles necesarios y nuestro equipo iniciará una investigación discreta para abordar la situación reportada.",
        infoList: [
            "Proporcione información clara y precisa sobre el incidente.",
            "Evite incluir datos personales para mantener su anonimato.",
            "Nuestro equipo manejará cada reporte con seriedad y confidencialidad."
        ],
        resourcesTitle: "Recursos y Apoyo",
        resourcesText: "Si usted o alguien que conoce está pasando por una situación difícil, por favor no dude en buscar ayuda. A continuación, encontrará recursos útiles que pueden brindar asistencia:",
        resourcesList: [
            { text: "Línea de Ayuda contra la Violencia:", link: "tel:1234567890" },
            { text: "Servicios de Salud Mental:", link: "https://www.saludmental.com" },
            { text: "Asistencia Legal Gratuita:", link: "https://www.asistencialegal.org" }
        ]
    },
    en: {
        title: "Anonymous Reporting Platform",
        reporterName: "Name:",
        reporterNamePlaceholder: "Enter your name",
        reporterLocation: "Location in Colorado Springs:",
        reporterLocationPlaceholder: "Enter your location",
        crimeType: "Type of Crime:",
        crimeTypePlaceholder: "Select the type of crime",
        crimeOptions: {
            theft: "Theft",
            assault: "Assault",
            fraud: "Fraud",
            other: "Other"
        },
        additionalDetails: "Additional Details:",
        additionalDetailsPlaceholder: "Provide additional details here...",
        disclaimer: "* Do not include personal details about yourself in the report.",
        note: "* The reported individual will be discreetly investigated.",
        submitButton: "Submit Report",
        footer: "© 2025 Anonymous Reporting Platform. All rights reserved.",
        formLegend: "Report Details",
        languageToggle: "Español",
        disclaimerTitle: "Legal and Privacy Notice",
        disclaimerText: "All reports made through this platform are completely anonymous and will be handled with the utmost confidentiality. We are committed to investigating each report discreetly and professionally, ensuring the protection of the identity of those who submit reports.",
        infoTitle: "How It Works",
        infoText: "Our platform allows you to report criminal or suspicious activities anonymously. Simply complete the report form with the necessary details, and our team will initiate a discreet investigation to address the reported situation.",
        infoList: [
            "Provide clear and precise information about the incident.",
            "Avoid including personal data to maintain your anonymity.",
            "Our team will handle each report with seriousness and confidentiality."
        ],
        resourcesTitle: "Resources and Support",
        resourcesText: "If you or someone you know is going through a difficult situation, please do not hesitate to seek help. Below are useful resources that can provide assistance:",
        resourcesList: [
            { text: "Violence Helpline:", link: "tel:1234567890" },
            { text: "Mental Health Services:", link: "https://www.mentalhealth.com" },
            { text: "Free Legal Assistance:", link: "https://www.freelegalhelp.org" }
        ]
    }
};

// Elements to Translate
const elementsToTranslate = {
    title: document.querySelector('.header-title'),
    reporterNameLabel: document.querySelector('label[for="reporter-name"]'),
    reporterNameInput: document.getElementById('reporter-name'),
    reporterLocationLabel: document.querySelector('label[for="reporter-location"]'),
    reporterLocationInput: document.getElementById('reporter-location'),
    crimeTypeLabel: document.querySelector('label[for="crime-type"]'),
    crimeTypeSelect: document.getElementById('crime-type'),
    additionalDetailsLabel: document.querySelector('label[for="additional-details"]'),
    additionalDetailsTextarea: document.getElementById('additional-details'),
    disclaimer: document.querySelector('.form-disclaimer'),
    note: document.querySelector('.form-note'),
    submitButton: document.querySelector('.form-submit-button'),
    footerText: document.querySelector('.footer-text'),
    formLegend: document.querySelector('.form-legend'),
    languageToggleButton: languageToggleButton,
    disclaimerTitle: document.querySelector('.disclaimer-title'),
    disclaimerText: document.querySelector('.disclaimer-text'),
    infoTitle: document.querySelector('.info-title'),
    infoText: document.querySelector('.info-text'),
    infoList: document.querySelector('.info-list'),
    resourcesTitle: document.querySelector('.resources-title'),
    resourcesText: document.querySelector('.resources-text'),
    resourcesList: document.querySelector('.resources-list')
};

// Function to Update Language
function updateLanguage(lang) {
    const t = translations[lang];

    // Update Header and Form Labels
    elementsToTranslate.title.textContent = t.title;
    elementsToTranslate.reporterNameLabel.textContent = t.reporterName;
    elementsToTranslate.reporterNameInput.placeholder = t.reporterNamePlaceholder;
    elementsToTranslate.reporterLocationLabel.textContent = t.reporterLocation;
    elementsToTranslate.reporterLocationInput.placeholder = t.reporterLocationPlaceholder;
    elementsToTranslate.crimeTypeLabel.textContent = t.crimeType;

    // Update Crime Type Options
    elementsToTranslate.crimeTypeSelect.innerHTML = `
        <option value="" disabled ${lang === 'es' ? 'selected' : ''}>${t.crimeTypePlaceholder}</option>
        <option value="theft">${t.crimeOptions.theft}</option>
        <option value="assault">${t.crimeOptions.assault}</option>
        <option value="fraud">${t.crimeOptions.fraud}</option>
        <option value="other">${t.crimeOptions.other}</option>
    `;

    elementsToTranslate.additionalDetailsLabel.textContent = t.additionalDetails;
    elementsToTranslate.additionalDetailsTextarea.placeholder = t.additionalDetailsPlaceholder;
    elementsToTranslate.disclaimer.textContent = t.disclaimer;
    elementsToTranslate.note.textContent = t.note;
    elementsToTranslate.submitButton.textContent = t.submitButton;
    elementsToTranslate.footerText.textContent = t.footer;
    elementsToTranslate.formLegend.textContent = t.formLegend;
    elementsToTranslate.languageToggleButton.textContent = t.languageToggle;

    // Update Disclaimer Section
    elementsToTranslate.disclaimerTitle.textContent = t.disclaimerTitle;
    elementsToTranslate.disclaimerText.textContent = t.disclaimerText;

    // Update Informational Section
    elementsToTranslate.infoTitle.textContent = t.infoTitle;
    elementsToTranslate.infoText.textContent = t.infoText;

    // Update Informational List
    elementsToTranslate.infoList.innerHTML = '';
    t.infoList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        elementsToTranslate.infoList.appendChild(li);
    });

    // Update Resources Section
    elementsToTranslate.resourcesTitle.textContent = t.resourcesTitle;
    elementsToTranslate.resourcesText.textContent = t.resourcesText;

    // Update Resources List
    elementsToTranslate.resourcesList.innerHTML = '';
    t.resourcesList.forEach(item => {
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = item.text;
        const a = document.createElement('a');
        a.href = item.link;
        a.classList.add('resources-link');
        a.textContent = item.link.startsWith('http') ? 'Visitar' : item.link;
        a.target = item.link.startsWith('http') ? '_blank' : '_self';
        li.appendChild(strong);
        li.appendChild(' ');
        li.appendChild(a);
        elementsToTranslate.resourcesList.appendChild(li);
    });
}

// Event Listener for Language Toggle
languageToggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(currentLanguage);
});

// Initialize with Default Language
updateLanguage(currentLanguage);
