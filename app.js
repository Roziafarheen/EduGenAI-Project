
const button = document.getElementById("submitButton");
const task = document.getElementById("task");
const input = document.getElementById("userInput");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

button.addEventListener("click", async () => {
    const selectedTask = task.value;
    const userText = input.value.trim();

    if (!userText) {
        result.textContent = "Please enter some text.";
        return;
    }

    loading.classList.remove("hidden");
    button.disabled = true;
    result.textContent = "";

    try {
        const response = await fetch("/api/process", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: selectedTask,
                text: userText
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.detail || "Request failed.");
        }

        result.textContent = data.response || "No response received.";
    } catch (error) {
        result.textContent = `Error: ${error.message}`;
        console.error(error);
    } finally {
        loading.classList.add("hidden");
        button.disabled = false;
    }
});
