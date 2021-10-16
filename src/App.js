import React from "react";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import QuizForm from "./components/QuizForm";
import { useGlobalContext } from "./context/index";

const App = () => {
  const { waiting, loading, questions, index, correct, checkAnswer } =
    useGlobalContext();

  if (waiting) {
    return <QuizForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p>
          Correct Answer: {correct}/{index}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                  <button
                    key={index}
                    style={{ width: "60%", textAlign: "center" }}
                    className="btn btn-secondary answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                  >
                    {answer}
                  </button>
                </>
              );
            })}
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
