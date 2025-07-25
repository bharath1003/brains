function sendMessage() {
  const input = document.getElementById("chatInput");
  const output = document.getElementById("chatOutput");
  const userMsg = input.value;

  output.innerHTML += `<div><b>You:</b> ${userMsg}</div>`;

  const responses = {
    "hi": "Hello! How can I help?",
    "how are you": "I'm just a bot, but I'm always ready to help!",
    "pi": "The value of π is approximately 3.14.",
    "excel shortcut": "Use Ctrl + Shift + Arrow to select large data blocks in Excel.",
    "default": "Try asking about formulas, shortcuts, or study tips."
  };

  const reply = responses[userMsg.toLowerCase()] || responses["default"];
  output.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  input.value = "";
}