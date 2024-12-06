import React, { useState } from "react";

const MiniTest = () => {
  const [result, setResult] = useState({ text: "", color: "" });

  const checkQuiz = () => {
    let score = 0;

    // Правильные ответы для вопросов 1-3 (радио)
    const correctAnswersRadio = [1, 1, 1];

    // Проверяем правильность ответов на вопросы 1-3
    for (let i = 1; i <= 3; i++) {
      const selected = document.querySelector(`input[name="question${i}"]:checked`);
      if (selected && parseInt(selected.value) === correctAnswersRadio[i - 1]) {
        score++;
      }
    }

    // Правильные ответы для вопросов 4-6 (текстовые)
    const correctAnswersText = ["model.evaluate()", "Softmax", "Sequential"];

    // Проверяем правильность ответов на вопросы 4-6
    for (let i = 4; i <= 6; i++) {
      const userAnswer = document.querySelector(`input[name="question${i}"]`).value.trim();
      if (userAnswer.toLowerCase() === correctAnswersText[i - 4].toLowerCase()) {
        score++;
      }
    }

    // Формируем сообщение в зависимости от результата
    const resultText = `Odpovedali ste správne na ${score} z 6 otazok`;

    if (score === 6) {
      setResult({ text: "Výborne. " + resultText, color: "green" });
    } else if (score >= 3) {
      setResult({ text: "Nie je to zlé, ale mohlo by to byť lepšie. " + resultText, color: "yellow" });
    } else {
      setResult({ text: resultText, color: "red" });
    }
  };

  return (
    <section id="mini-test" className="container my-5">
      <h2 style={{ textAlign: "center", color: "white" }}>Mini-test: Otestujte svoje znalosti</h2>
      <hr />
      <form id="quiz-form">
        {/* Вопрос 1 */}
        <div className="mb-3">
          <label className="form-label">1. Aký je hlavný cieľ neurónovej siete?</label>
          <div>
            <input type="radio" id="q1a" name="question1" value="0" />
            <label htmlFor="q1a">A. Zachovanie údajov bez zmien</label>
          </div>
          <div>
            <input type="radio" id="q1b" name="question1" value="1" />
            <label htmlFor="q1b">B. Učenie na dátach na zlepšenie predikcií</label>
          </div>
          <div>
            <input type="radio" id="q1c" name="question1" value="0" />
            <label htmlFor="q1c">C. Odstránenie šumu z dát</label>
          </div>
        </div>

        {/* Вопрос 2 */}
        <div className="mb-3">
          <label className="form-label">2. Ktorá knižnica je dynamická a populárna medzi výskumníkmi na tvorbu nových architektúr?</label>
          <div>
            <input type="radio" id="q2a" name="question2" value="1" />
            <label htmlFor="q2a">A. PyTorch</label>
          </div>
          <div>
            <input type="radio" id="q2b" name="question2" value="0" />
            <label htmlFor="q2b">B. TensorFlow</label>
          </div>
          <div>
            <input type="radio" id="q2c" name="question2" value="0" />
            <label htmlFor="q2c">C. Scikit-learn</label>
          </div>
        </div>

        {/* Вопрос 3 */}
        <div className="mb-3">
          <label className="form-label">3. Ako sa nazýva proces, pri ktorom sa chyba šíri späť po sieti na úpravu váh?</label>
          <div>
            <input type="radio" id="q3a" name="question3" value="1" />
            <label htmlFor="q3a">A. Spätné šírenie chyby</label>
          </div>
          <div>
            <input type="radio" id="q3b" name="question3" value="0" />
            <label htmlFor="q3b">B. Priame šírenie</label>
          </div>
          <div>
            <input type="radio" id="q3c" name="question3" value="0" />
            <label htmlFor="q3c">C. Regularizácia</label>
          </div>
        </div>

       {/* Вопрос 4 */}
    <div className="mb-3">
      <label className="form-label">4. Aká metóda sa používa na hodnotenie presnosti modelu na testovacích dátach?</label>
      <input type="text" className="form-control" name="question4" placeholder="Zadajte vašu odpoveď" />
    </div>

    {/* Вопрос 5 */}
    <div className="mb-3">
      <label className="form-label">5. Ktorá vrstva sa pridáva na získanie pravdepodobností tried?</label>
      <input type="text" className="form-control" name="question5" placeholder="Zadajte vašu odpoveď" />
    </div>

    {/* Вопрос 6 */}
    <div className="mb-3">
      <label className="form-label">6. Ktorá metóda sa používa na vytvorenie sekvenčného modelu neurónovej siete?</label>
      <input type="text" className="form-control" name="question6" placeholder="Zadajte vašu odpoveď" />
    </div>

        <button type="button" className="btn btn-primary" onClick={checkQuiz}>
          Skontrolovať odpovede
        </button>
        <p style={{ color: result.color, marginTop: "20px",textAlign: "center"}}>{result.text}</p>
      </form>
    </section>
  );
};

export default MiniTest;
