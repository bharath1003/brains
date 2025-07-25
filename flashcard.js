function showFlashcards(subject) {
  fetch(`flashcards/${subject}-cards.json`)
    .then(res => res.json())
    .then(data => {
      let index = 0;
      const flashcardsContainer = document.getElementById("flashcards");
      flashcardsContainer.classList.remove("hidden");

      function showCard() {
        const card = data[index];
        flashcardsContainer.innerHTML = `
          <h3>Flashcard ${index + 1}</h3>
          <p><strong>${card.title}</strong></p>
          <p>${card.content}</p>
          <button onclick="prevCard()">⬅️</button>
          <button onclick="nextCard()">➡️</button>
        `;
      }

      window.nextCard = () => {
        index = (index + 1) % data.length;
        showCard();
      };

      window.prevCard = () => {
        index = (index - 1 + data.length) % data.length;
        showCard();
      };

      showCard();
    });
}