const yearElement = document.getElementById("year");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    formNote.textContent = "Thank you. Your request was captured. We will contact you soon.";
    form.reset();
  });
}
