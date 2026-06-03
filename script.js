const yearElement = document.getElementById("year");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const itServicesCard = document.getElementById("itServicesCard");
const itServicesDetails = document.getElementById("itServicesDetails");
const aiServicesCard = document.getElementById("aiServicesCard");
const aiServicesDetails = document.getElementById("aiServicesDetails");
const marketingServicesCard = document.getElementById("marketingServicesCard");
const marketingServicesDetails = document.getElementById("marketingServicesDetails");

function bindServiceToggle(card, details) {
  if (!card || !details) {
    return;
  }

  const closeOtherPanels = () => {
    const serviceCards = document.querySelectorAll(".service-card-trigger[aria-controls]");

    serviceCards.forEach((serviceCard) => {
      if (serviceCard === card) {
        return;
      }

      const detailsId = serviceCard.getAttribute("aria-controls");
      const serviceDetails = detailsId ? document.getElementById(detailsId) : null;

      if (serviceDetails && !serviceDetails.hasAttribute("hidden")) {
        serviceDetails.setAttribute("hidden", "");
      }

      serviceCard.setAttribute("aria-expanded", "false");
    });
  };

  const scrollToDetails = () => {
    const header = document.querySelector(".site-header");
    const headerOffset = header ? header.offsetHeight + 16 : 16;
    const targetPosition = details.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });
  };

  const toggleDetails = () => {
    const isHidden = details.hasAttribute("hidden");

    if (isHidden) {
      closeOtherPanels();
      details.removeAttribute("hidden");
      card.setAttribute("aria-expanded", "true");
      scrollToDetails();
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
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const ajaxEndpoint = form.getAttribute("data-ajax-endpoint");
    const payload = new FormData(form);

    if (!ajaxEndpoint) {
      form.submit();
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    formNote.textContent = "";

    try {
      const response = await fetch(ajaxEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      formNote.textContent = "Thank you. Your request was sent successfully.";
      form.reset();
    } catch (error) {
      formNote.textContent = "Submission failed. Please try again in a moment.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Request";
      }
    }
  });
}

bindServiceToggle(itServicesCard, itServicesDetails);
bindServiceToggle(aiServicesCard, aiServicesDetails);
bindServiceToggle(marketingServicesCard, marketingServicesDetails);
