def summarize_text(text: str) -> str:
    """
    Temporary text summarization function.

    Gemini will be connected later.
    """

    if not text.strip():
        return "Please enter some text to summarize."

    return f"Summary requested for: {text}"