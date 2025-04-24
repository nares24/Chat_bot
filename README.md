 PDF Chatbot with LangGraph, Ollama & React

A full-stack AI-powered chatbot that can read and answer questions about PDF files (e.g., resumes).  
Built using FastAPI, LangGraph, and a local LLM (LLaMA 3 via Ollama) with a modern React + Tailwind CSS frontend.

--------------------------------------------


Backend: FastAPI, LangGraph, Ollama (LLaMA 3), PyMuPDF

Frontend: ReactJS, Tailwind CSS

LLM Integration: Local inference using Ollama

- Upload a PDF (e.g., resume or document)
- Ask natural language questions about its content
- Backend chain powered by LangGraph + Ollama (local LLM)
- ReactJS frontend with Tailwind styling
- File parsing using PyMuPDF

-----------------------

STEPS TO START AND RUN  THE PROJECT.

1.Start Ollama (backend LLM)
    Make sure Ollama is installed	.
       use this command("ollama run llama3") inside the project in cmd.

2. Run the Backend (FastAPI)
	("pip install -r requirements.txt")
        ("uvicorn mani:app --reload")inside the project with new cmd terminal.

3.Run the Frontend (React)
       cd frontend
      ("npm install")
      ("npm start") inside the front-end folder in new cmd terminal.

4.U WILL BE REDIRECTED TO THE FRONT END PAGE OF THE PROJECT,UPLOAD THE DESIRED PDF FILE TO THE CHATBOT AND ENTER THE MESSAGE TO THE CHATBOT FOR THE PROCESSING OF THE PDF FILE.

5.THE (OLLAMA) CHATBOT WILL PROCESS THE PDF FILE ACCORDING TO THE PROMPT GIVEN BY THE USER AND IT WILL GIVE US THE  OUTPUT.

6. THE PROCESSINF GOR THE OUTPUT MAY TAKE SOME TIME (30-50) SECONDS BECAUSE THE OLLAMA LOADS INTO THE MEMORY FIRST AND THEN PROCESSES THE OUTPUT.

7.Ollama runs entirely on your local CPU (unless you have a GPU setup).

8.If you have lots of other apps open, it may slow down processing

