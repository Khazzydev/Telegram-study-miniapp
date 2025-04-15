document.addEventListener("DOMContentLoaded", () => {
    const englishBtn = document.getElementById("english-btn");
    englishBtn.addEventListener("click", startLesson);
  });
  
  async function startLesson() {
    const res = await fetch("src/data/data/lesson1.json");
    const data = await res.json();
  
    const app = document.getElementById("app");
    app.innerHTML = `
      <h2>${data.title}</h2>
      <p><strong>O‘zbekcha:</strong> ${data.uz}</p>
      <p><strong>Inglizcha:</strong> ${data.en}</p>
      <audio controls src="${data.audio}"></audio>
      <p><strong>Savol:</strong> ${data.question}</p>
      <div id="options">
        ${data.options.map(option => `
          <button onclick="checkAnswer('${option}', '${data.correct}')">${option}</button>
        `).join("")}
      </div>
      <div id="result"></div>
    `;
  }
  
  function checkAnswer(selected, correct) {
    const result = document.getElementById("result");
    if (selected === correct) {
      result.innerHTML = "<p style='color:green;'>To‘g‘ri javob!</p>";
    } else {
      result.innerHTML = "<p style='color:red;'>Noto‘g‘ri, yana urinib ko‘ring.</p>";
    }
  }