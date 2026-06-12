const yearElement = document.getElementById("year");
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

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
