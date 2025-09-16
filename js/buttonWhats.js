const messages = [
  "Precisa de ajuda?",
  "Quer conhecer mais sobre a solução para seu negócio?",
  "Precisa de mais informações? 🙂"
];

let index = 0;
const messageElement = document.getElementById("whatsapp-message");

setInterval(() => {
  index = (index + 1) % messages.length;
  messageElement.textContent = messages[index];
}, 4000); // troca a cada 4 segundos