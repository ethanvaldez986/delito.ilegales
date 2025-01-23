function toggleLanguage() {
    const spanishElements = document.querySelectorAll('.spanish');
    const englishElements = document.querySelectorAll('.english');

    spanishElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    englishElements.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
}
