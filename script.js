
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const task = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.addEventListener("click", function() {
        taskName.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        task.remove();
    });

    task.appendChild(taskName);
    task.appendChild(completeButton);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskInput.value = "";
});
