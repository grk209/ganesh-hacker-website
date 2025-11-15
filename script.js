// Typing effect text
const typingTexts = [
  "AI & ML Engineering Student",
  "Future Ethical Hacker",
  "eSports & Gaming Enthusiast",
  "Always Learning New Skills"
];

let typingIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  const currentText = typingTexts[typingIndex];
  if (charIndex <= currentText.length) {
    typingElement.textContent = currentText.slice(0, charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      erase();
    }, 1200);
  }
}

function erase() {
  const currentText = typingTexts[typingIndex];
  if (charIndex >= 0) {
    typingElement.textContent = currentText.slice(0, charIndex);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    typingIndex = (typingIndex + 1) % typingTexts.length;
    setTimeout(type, 300);
  }
}

type();

// Fake terminal output
const terminalLines = [
  "booting system...",
  "loading AI & ML modules...",
  "initializing ethical hacking environment...",
  "checking esports reflexes...",
  "system status: STABLE",
  "user: GANESH_THE_HACKER",
  "mission: LEARN // BUILD // SECURE"
];

const terminalBody = document.getElementById("terminal-body");

function addTerminalLine(text, delay) {
  setTimeout(() => {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `<span class="prompt">ganesh@root:~$</span> ${text}`;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }, delay);
}

terminalLines.forEach((line, index) => {
  addTerminalLine(line, 500 * (index + 1));
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form handler
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  status.style.color = "#00ff88";
  status.textContent = "Message sent (demo). In real life, this would send to Ganesh's email.";
  event.target.reset();
}
