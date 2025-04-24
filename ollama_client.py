import requests

OLLAMA_HOST = "http://localhost:11434"

def call_ollama(prompt: str, model: str = "llama3") -> str:
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/generate",
            json={
                "model": model,
                "prompt": prompt,
                "stream": False  # stream=False means you get the full response at once
            }
        )
        response.raise_for_status()
        return response.json().get("response", "").strip()
    except Exception as e:
        return f"[Error calling Ollama: {e}]"
    
    print(f"🔁 Calling Ollama with prompt: {prompt}")

