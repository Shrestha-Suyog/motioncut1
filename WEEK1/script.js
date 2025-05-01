const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add("incomplete");

    const span = document.createElement("span");
    span.className = "task-text";
    span.innerText = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✅";
    completeBtn.classList.add("action-btn");
    completeBtn.title = "Mark as Complete";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
        li.classList.toggle("incomplete");
    };

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.classList.add("action-btn");
    editBtn.title = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText.trim();
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("action-btn");
    deleteBtn.title = "Delete";
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);
    taskList.appendChild(li);

    taskInput.value = "";
}
