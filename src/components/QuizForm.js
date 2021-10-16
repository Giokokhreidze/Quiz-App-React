import React from "react";
import { useGlobalContext } from "../context/index";

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <section className="quiz quiz-small">
      <form>
        <h2 style={{ marginBottom: "2rem" }}>Quiz App</h2>
        <div className="mb-3">
          <label for="noOfQuestion" className="form-label">
            Number of Questions
          </label>
          <input
            type="number"
            name="amount"
            className="form-control"
            value={quiz.amount}
            onChange={handleChange}
            min={1}
            max={50}
            style={{ width: "400px" }}
          />
        </div>
        <div className="mb-3">
          <label for="category" className="form-label">
            Categories
          </label>
          <select
            className="form-select"
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="difficulty" className="form-label">
            Level
          </label>
          <select
            className="form-select"
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {error && (
          <p className="error">
            Can't find questions, please try other options
          </p>
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success start-btn "
        >
          Get Started Quiz
        </button>
      </form>
    </section>
  );
};

export default QuizForm;
