-- 1. Create the Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    -- Auto-incrementing unique integer identifier
    name VARCHAR(100) NOT NULL,
    -- Text up to 100 characters, cannot be empty
    email VARCHAR(100) UNIQUE NOT NULL -- Email must be unique so users don't duplicate
);
-- 2. Create the Focus Sessions Table (Relational Child)
CREATE TABLE focus_sessions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    -- Points back to the parent user
    duration_seconds INT NOT NULL,
    -- Stores how long the focus session lasted
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- Auto-saves exact date/time
    -- This establishes the relational link between the two tables:
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
-- 3. Seed Mock Data (Insert initial records to test our logic)
INSERT INTO users (name, email)
VALUES ('Developer Joe', 'joe@idc.com');
-- Add a starting 10-minute (600 seconds) session linked to Joe (User ID: 1)
INSERT INTO focus_sessions (user_id, duration_seconds)
VALUES (1, 600);