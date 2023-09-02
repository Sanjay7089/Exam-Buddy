import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import ExamRoom from "./components/ExamRoom";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleStartExam = (topic, name) => {
    setSelectedTopic(topic);
    setStudentName(name);
  };

  return (
    <div className="app">
      {selectedTopic === "" ? (
        <Home onStartExam={handleStartExam} />
      ) : (
        <ExamRoom selectedTopic={selectedTopic} studentName={studentName} />
      )}
    </div>
  );
}

export default App;
