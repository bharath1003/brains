let currentQuiz = [];
let currentQuestion = 0;

function loadQuiz(subject) {
  fetch(`data/${subject}-quiz.json`)
    .then(res => res.json())
    .then(data => {
      currentQuiz = data;
      currentQuestion = 0;
      showQuestion();
      document.getElementById("subjects").style.display = "none";
      document.getElementById("quiz").classList.remove("hidden");
    });
}

function showQuestion() {
  const quizContainer = document.getElementById("quiz");
  const q = currentQuiz[currentQuestion];
  quizContainer.innerHTML = `
    <h3>${q.question}</h3>
    ${q.options.map((opt, i) => `
      <button onclick="checkAnswer(${i})">${opt}</button>
    `).join('<br>')}
  `;
}

function checkAnswer(selectedIndex) {
  const correctIndex = currentQuiz[currentQuestion].answer;
  if (selectedIndex === correctIndex) {
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! The correct answer is: " + currentQuiz[currentQuestion].options[correctIndex]);
  }

  currentQuestion++;
  if (currentQuestion < currentQuiz.length) {
    showQuestion();
  } else {
    alert("🎉 Quiz Complete!");
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("subjects").style.display = "block";
  }
}