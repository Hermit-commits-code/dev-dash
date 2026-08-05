from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# 1. Initialize the FastAPI web server instance
app = FastAPI()

# 2. Configure CORS (Cross-Origin Resource Sharing)
# This allows your React frontend (on port 5173) to talk to your Python backend safely!
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FocusSession(BaseModel):
    duration_seconds: int


# 3. Define a basic GET endpoint at the root path
@app.get("/")
def read_root():
    return {"status": "Python Backend Online", "engine": "FastAPI"}


# 4. Define an endpoint that mimics fetching data from our SQL database schema
@app.get("/api/users")
def get_database_users():
    # This represents a Python Dictionary mimicking our user record row
    return {
        "id": 1,
        "name": "Developer Joe",
        "email": "joe@idc.com",
        "role": "Full Stack Learner",
    }

@app.post("/api/sessions")
def save_focus_sessions(session: FocusSession):
        print(f"🚀 Python intercepted a secure save request! Logged: {session.duration_seconds} seconds.")
        return {"status": "success", "saved_seconds": session.duration_seconds}
