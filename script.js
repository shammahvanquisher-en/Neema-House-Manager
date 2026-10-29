
document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = document.querySelectorAll(
    "[data-page], .menu-item, .nav-link"
  );

  const pageContent = document.getElementById("pageContent");
  const sidebar = document.getElementById("sidebar");
  const menuToggle = document.getElementById("menuToggle");

  const pages = {
    dashboard: {
      title: "Dashboard",
      text: "Welcome to Neema House Manager."
    },
    "record-manager": {
      title: "Record Manager",
      text: "Manage tenant records and rental information."
    },
    receipts: {
      title: "Receipts",
      text: "View and manage payment receipts."
    },
    "payment-history": {
      title: "Payment History",
      text: "View previous rent payments."
    },
    tenants: {
      title: "Tenants",
      text: "Manage current tenants."
    },
    houses: {
      title: "Houses",
      text: "Manage your rental units."
    },
    arrears: {
      title: "Arrears",
      text: "Track outstanding rent balances."
    },
    reports: {
      title: "Reports",
      text: "View rental and payment reports."
    },
    settings: {
      title: "Settings",
      text: "Manage your application settings."
    }
  };

  function openPage(pageName) {
    const page = pages[pageName];

    if (!page || !pageContent) return;

    pageContent.innerHTML = `
      <section class="page-section">
        <h1>${page.title}</h1>
        <p>${page.text}</p>
      </section>
    `;

    menuButtons.forEach(button => {
      const buttonPage =
        button.dataset.page ||
        button.dataset.target ||
        button.textContent.trim().toLowerCase().replace(/\s+/g, "-");

      button.classList.toggle("active", buttonPage === pageName);
    });

    if (sidebar) sidebar.classList.remove("open");
  }

  menuButtons.forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();

      const pageName =
        button.dataset.page ||
        button.dataset.target ||
        button.textContent.trim().toLowerCase().replace(/\s+/g, "-");

      openPage(pageName);
    });
  });

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Open the dashboard when the page loads.
  openPage("dashboard");
});
