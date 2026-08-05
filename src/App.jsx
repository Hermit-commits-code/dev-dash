import { useState, useEffect } from 'react';
import "./App.css";

function App() {

  const [seconds, setSeconds] = useState(0);

  const [user, setUser] = useState(null);

  // Lifecycle Trigger
  useEffect(()=>{
  fetch('http://localhost:8000/api/users')
    .then((response) => response.json()) // Convert raw network data into JSON
      .then((data) => {
        setUser(data); // Save the Python data directly into React's memory state!
      })
      .catch((error) => console.error("Error connecting to Python backend:", error));
  },[]);



  // Add minutes to session counter
  const handleAddTime = () => {
    // Update the state memory
    setSeconds(seconds + 60);
  }

  const handleResetTime = () => {
    setSeconds(0);
  }
   return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>🚀 DevDash // Developer Workspace</h1>
        {/* Render a dynamic welcome message once the user data loads */}
        <p>Welcome back, {user ? user.name : "Loading account..."}! Track your learning journey.</p>
      </header>

      <main className="dashboard-grid">
        <section className="card">
          <h2>📚 Curriculum Tracker</h2>
          <p>Your FreeCodeCamp progress metrics will go here.</p>
        </section>

        {/* UPDATE: This card now pulls dynamically from your Python server data! */}
        <section className="card">
          <h2>🐍 Python Backend Status</h2>
          {user ? (
            <div className="profile-display">
              <p className="status-tag online">🟢 Connected to API</p>
              <div className="user-details">
                <p><strong>Account ID:</strong> {user.id}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Focus Role:</strong> {user.role}</p>
              </div>
            </div>
          ) : (
            <p className="status-tag offline">🔴 Server Offline or Disconnected</p>
          )}
        </section>

        <section className="card">
          <h2>⏱️ Coding Timer</h2>
          <div className="timer-display">
            <span className="timer-count">{seconds}</span> seconds focused
          </div>
          <div className="button-group">
            <button className="btn-primary" onClick={handleAddTime}>
              +1 Minute Focus
            </button>
            <button className="btn-secondary" onClick={handleResetTime}>
              Reset Session
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
