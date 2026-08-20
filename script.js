const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  Array.from(document.querySelectorAll(".site-nav a")).forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

Array.from(document.querySelectorAll(".copy-email")).forEach((button) => {
  button.addEventListener("click", async () => {
    const emailAddress = button.dataset.copyText;

    if (!emailAddress || !navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(emailAddress);
    button.textContent = "Copied";
    button.setAttribute("aria-label", "Email address copied");

    window.setTimeout(() => {
      button.innerHTML = "&#128203;";
      button.setAttribute("aria-label", `Copy ${emailAddress}`);
    }, 1600);
  });
});
