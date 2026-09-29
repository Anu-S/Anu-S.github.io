const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const commands = ["whoami", "cat skills.txt", "git log --oneline", "terraform plan"];
let commandIndex = 0;
const commandEl = document.getElementById("typed-command");

setInterval(() => {
  commandIndex = (commandIndex + 1) % commands.length;
  if (commandEl) commandEl.textContent = commands[commandIndex];
}, 2800);
