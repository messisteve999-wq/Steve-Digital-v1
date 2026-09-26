const WHATSAPP = "237677045467";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a => {
  a.addEventListener("click", () => mainNav.classList.remove("open"));
});

const modal = document.getElementById("orderModal");
const selectedService = document.getElementById("selectedService");
const serviceSelect = document.getElementById("service");

function openOrder(service) {
  selectedService.textContent = service;
  serviceSelect.value = service;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

document.getElementById("modalClose").addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});

document.getElementById("modalOrder").addEventListener("click", () => {
  modal.classList.remove("show");
  document.getElementById("commande").scrollIntoView({ behavior: "smooth" });
  document.getElementById("name").focus();
});

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();
  const budget = document.getElementById("budget").value.trim();

  const message =
`Bonjour Warrior King 👑

Je souhaite commander un service.

👤 Nom : ${name}
🛠️ Service : ${service}
📝 Projet : ${details}
💰 Budget indicatif : ${budget || "Non précisé"}

Merci de me contacter pour finaliser ma commande.`;

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
});
