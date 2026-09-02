document.addEventListener("DOMContentLoaded", function () {

    // Auto-update footer copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
