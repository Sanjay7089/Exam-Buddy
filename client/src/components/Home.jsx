import React, { useState } from "react";
import "./Home.css";

function Home({ onStartExam }) {
  const [studentName, setStudentName] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleNameChange = (event) => {
    setStudentName(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const startExam = () => {
    if (studentName && selectedTopic) {
      onStartExam(selectedTopic, studentName);
    }
  };

  return (
    <div className="home-container">
      <div className="home">
        <h1>Welcome to Oral AI Test</h1>
        <div className="input-group">
          <input
            type="text"
            id="studentName"
            placeholder="Enter your name"
            value={studentName}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-group">
          <select id="topic" value={selectedTopic} onChange={handleTopicChange}>
            <option value="">Choose a topic</option>
            <option value="topic1">Topic 1</option>
            <option value="topic2">Topic 2</option>
            {/* Add more topics as needed */}
          </select>
        </div>
        <button
          className="start-button"
          onClick={startExam}
          disabled={!selectedTopic || !studentName}
        >
          Start Oral Test
        </button>
      </div>
    </div>
  );
}

export default Home;
