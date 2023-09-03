import React from 'react';
import './ExamRoom.css';

function ExamRoom({ selectedTopic, studentName }) {
  return (
    <div className="exam-room-container">
      <div className="exam-room">
        <h1>Welcome, {studentName}!</h1>
        <h2>Topic: {selectedTopic}</h2>
        <div className="pdf-container">
          {/* Placeholder for PDF display */}
        </div>
        <div className="button-container">
          <button className="action-button">Start Recording</button>
          <button className="action-button">Submit Recording</button>
        </div>
      </div>
    </div>
  );
}

export default ExamRoom;
