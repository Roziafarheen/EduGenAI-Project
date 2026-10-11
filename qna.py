def answer_question(question: str) -> str:
    """
    Temporary Q&A function.

    We will connect this function to Google Gemini
    after the basic backend structure is working.
    """

    if not question.strip():
        return "Please enter a question."

    return f"Your question was: {question}"