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
        languageToggle: "English"
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
        languageToggle: "Español"
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
    languageToggleButton: languageToggleButton
};

// Function to Update Language
function updateLanguage(lang) {
    const t = translations[lang];

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
}

// Event Listener for Language Toggle
languageToggleButton.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    updateLanguage(currentLanguage);
});

// Initialize with Default Language
updateLanguage(currentLanguage);

// Form Submission Handler (Optional Enhancement)
const reportForm = document.getElementById('anonymous-report-form');

reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you can handle the form data, e.g., send it to a server
    alert(currentLanguage === 'es' ? 'Reporte enviado exitosamente.' : 'Report submitted successfully.');
    reportForm.reset();
    // Reset to default language if needed
    if (currentLanguage !== 'es') {
        currentLanguage = 'es';
        updateLanguage(currentLanguage);
    }
});
