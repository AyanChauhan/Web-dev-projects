console.log('hello')

const tasks = [];

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const allButton = document.getElementById("allButton");
const pendingButton = document.getElementById("pendingButton");
const completedButton = document.getElementById("completedButton");

function addTask(task) {
    console.log(task);
    const newTask = {
        text: task,
        completed: false
    };

    tasks.push(newTask);
}


function renderTasks() {
    taskList.innerHTML = "";

    for (const task of tasks) {
        console.log(task);

        const listItem = document.createElement("li");
        listItem.textContent = task.text;
        if (task.completed) {
            listItem.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete";

        const completeButton = document.createElement("button");
        completeButton.textContent = "complete";

        const editButton = document.createElement("button");
        editButton.textContent = "edit";

        listItem.classList.add("listItems");
        deleteButton.classList.add("buttons");
        completeButton.classList.add("buttons");
        editButton.classList.add("buttons");

        listItem.appendChild(completeButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        deleteButton.addEventListener("click", function () {

            const index = tasks.indexOf(task);

            tasks.splice(index, 1);

            renderTasks();

        });

        editButton.addEventListener("click", function () {

            const newText = prompt("Edit your task:", task.text);

            if (newText !== null && newText.trim() !== "") {
                task.text = newText.trim();
                renderTasks();
            }

        });

        completeButton.addEventListener("click", function () {

            task.completed = !task.completed;

            renderTasks();

        });

    }
}


addButton.addEventListener("click", function () {

    const task = taskInput.value;
    if (task.trim() === "") {
        alert("please enter your task")
    }

    else {
        addTask(task);
        renderTasks()
    }
    taskInput.value = "";
})
