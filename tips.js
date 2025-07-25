function startTips() {
  fetch("tips/study-tips.json")
    .then(res => res.json())
    .then(tips => {
      const tipText = document.getElementById("tipText");
      let tipIndex = 0;
      tipText.textContent = tips[tipIndex];
      setInterval(() => {
        tipIndex = (tipIndex + 1) % tips.length;
        tipText.textContent = tips[tipIndex];
      }, 8000);
    });
}