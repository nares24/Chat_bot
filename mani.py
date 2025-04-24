import os
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

from file_processor import extract_text_from_pdf
from langgraph_chain import run_chain

app = FastAPI()

# Enable CORS (important for frontend dev)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store latest uploaded context
uploaded_context = ""

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

class ChatRequest(BaseModel):
    message: str
    history: Optional[List[str]] = []

@app.post("/api/upload")
async def upload_file(file: UploadFile = File(...)):
    global uploaded_context

    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported.")

    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as f:
        f.write(await file.read())

    uploaded_context = extract_text_from_pdf(file_path)
    return {"message": "File uploaded and processed successfully."}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    response = run_chain(prompt=request.message, context=uploaded_context, history=request.history)
    return {"response": response}
