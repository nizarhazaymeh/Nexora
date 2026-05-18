const yearElement = document.getElementById("year");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const itServicesCard = document.getElementById("itServicesCard");
const itServicesDetails = document.getElementById("itServicesDetails");
const aiServicesCard = document.getElementById("aiServicesCard");
const aiServicesDetails = document.getElementById("aiServicesDetails");

function bindServiceToggle(card, details) {
  if (!card || !details) {
    return;
  }

  const toggleDetails = () => {
    const isHidden = details.hasAttribute("hidden");

    if (isHidden) {
      details.removeAttribute("hidden");
      card.setAttribute("aria-expanded", "true");
    } else {
      details.setAttribute("hidden", "");
      card.setAttribute("aria-expanded", "false");
    }
  };

  card.addEventListener("click", toggleDetails);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleDetails();
    }
  });
}

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

bindServiceToggle(itServicesCard, itServicesDetails);
bindServiceToggle(aiServicesCard, aiServicesDetails);
