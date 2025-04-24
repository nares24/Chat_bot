from ollama_client import call_ollama

def run_chain(prompt: str, context: str = "", history=None) -> str:
    if context:
        prompt = f"  context :\n{context}\n\nUser: {prompt}"
    else:
        prompt = f"User: {prompt}"

    return call_ollama(prompt)
