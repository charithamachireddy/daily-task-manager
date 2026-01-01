function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // prevent duplicate tasks
    const tasks = document.querySelectorAll("#taskList li .task-text");
    for (let task of tasks) {
        if (task.textContent === taskText) {
            alert("Task already exists");
            return;
        }
    }

    // current date & time
    const now = new Date();
    const dateTime = now.toLocaleString();

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.className = "task-text";

    const time = document.createElement("div");
    time.textContent = dateTime;
    time.className = "task-time";

    // mark completed
    span.onclick = function () {
        li.classList.toggle("done");
    };

    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
