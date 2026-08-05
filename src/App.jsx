import "./App.css";

function App() {
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
          <p>Focus sessions and project benchmarks.</p>
        </section>
      </main>
    </div>
  );
}

export default App;