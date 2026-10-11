def recommend_learning_path(topic: str) -> str:
    """
    Temporary learning-path recommendation function.

    Gemini will be connected later.
    """

    if not topic.strip():
        return "Please enter a topic."

    return f"Learning path requested for: {topic}"