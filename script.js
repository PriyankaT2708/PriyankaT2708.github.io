const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalLink = document.getElementById("modalLink");

document.getElementById("year").textContent = new Date().getFullYear();

const projects = {
  p1: {
    title: "Dynamic Adaptation of LLMs for IT Ticket Resolution",
    body:
      "Built a multi-metric evaluation framework (lexical + semantic + human) to benchmark LLM answers on real IT questions. Improved semantic alignment and response quality using modern NLP tooling.",
    link: "https://github.com/yourusername/your-repo"
  },
  p2: {
    title: "EUC Asset Management (Spring Boot APIs)",
    body:
      "Designed and enhanced REST APIs (Spring Boot, JPA) for onboarding/offboarding flows, integrated testing via Postman, and improved operational efficiency with automation-ready endpoints.",
    link: "https://github.com/yourusername/your-repo"
  },
  p3: {
    title: "AIOps Monitoring Integrations",
    body:
      "Integrated monitoring/ITSM workflows and alerts across tooling, improving reliability and reducing manual touch points via automation and structured data pipelines.",
    link: "https://github.com/yourusername/your-repo"
  }
};

document.querySelectorAll("[data-modal]").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-modal");
    const data = projects[key];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalBody.textContent = data.body;
    modalLink.href = data.link;

    modal.showModal();
  });
});

modal.querySelector(".close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  // click outside content closes
  const rect = modal.getBoundingClientRect();
  const inDialog =
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width;

  if (!inDialog) modal.close();
});
