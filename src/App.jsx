import { useState } from 'react';
import "./App.css";

function App() {

  const [seconds, setSeconds] = useState(0);
  // Add minutes to session counter
  const handleAddTime = () => {
    // Update the state memory
    setSeconds(seconds + 60);
  }

  const handleResetTime = ()=>{
    setSeconds(0);
  }
  return (
    <div className="dashboard-container">
      {/* 1. Header Section */}
      <header className="dashboard-header">
        <h1>🚀 DevDash // Developer Workspace</h1>
        <p>Welcome back, Joe! Track your learning journey.</p>
      </header>

      {/* 2. Main Grid Content */}
      <main className="dashboard-grid">
        <section className="card">
          <h2>📚 Curriculum Tracker</h2>
          <p>Your FreeCodeCamp progress metrics will go here.</p>
        </section>

        <section className="card">
          <h2>🐍 Python Backend Status</h2>
          <p>Database synchronization status: Disconnected</p>
        </section>

        <section className="card">
          <h2>⏱️ Coding Timer</h2>
          <div class="timer-display">
            <span class="timer-count">{seconds}</span> seconds focused
          </div>
          <div class="button-group">
            <button class="btn-primary" onClick={handleAddTime}>+1 Minute Focus</button>
            <button class="btn-secondary"onClick={handleResetTime}>Reset Session</button>
          </div>
          <p>Focus sessions and project benchmarks.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
