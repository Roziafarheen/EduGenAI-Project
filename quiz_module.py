def generate_quiz(topic: str) -> str:
    """
    Temporary quiz-generation function.

    Gemini will be connected later.
    """

    if not topic.strip():
        return "Please enter a topic."

    return f"Quiz generation requested for: {topic}"