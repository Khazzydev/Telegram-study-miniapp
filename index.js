async function startLesson() {
    const res = await fetch('src/data/lesson1.json');
    const data = await res.json();
    const container = document.getElementById('lesson');
    container.innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>O'zbekcha:</strong> ${data.uz}</p>
        <p><strong>Inglizcha:</strong> ${data.en}</p>
        <audio controls src="${data.audio}"></audio>
        <p>Savol: ${data.question}</p>
        ${data.options.map(option => `<button onclick="checkAnswer('${option}', '${data.correct}')">${option}</button>`).join('')}
    `;
}

function checkAnswer(selected, correct) {
    alert(selected === correct ? "To'g'ri javob!" : "Noto'g'ri, qayta urinib ko'ring.");
}

document.getElementById('english-btn').addEventListener('click', startLesson);