console.log('hello')

const tasks = [];
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    const parsedTasks = JSON.parse(savedTasks);
    tasks.push(...parsedTasks);
}
let currentFilter = "all";

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
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter="all") {
    taskList.innerHTML = "";

    for (const task of tasks) {
        console.log(task);

        if (filter === "completed" && task.completed === false) {
            continue;
        }
        else if (filter === "pending" && task.completed === true) {
            continue;
        }

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
            saveTasks();
            renderTasks(currentFilter);

        });

        editButton.addEventListener("click", function () {

            const newText = prompt("Edit your task:", task.text);

            if (newText !== null && newText.trim() !== "") {
                task.text = newText.trim();
                saveTasks();
                renderTasks(currentFilter);
            }

        });

        completeButton.addEventListener("click", function () {

            task.completed = !task.completed;
            saveTasks();
            renderTasks(currentFilter);

        });

    }
}

allButton.addEventListener("click", function () {
    currentFilter = "all";
    renderTasks(currentFilter);
});

pendingButton.addEventListener("click", function () {
    currentFilter = "pending";
    renderTasks(currentFilter);
});

completedButton.addEventListener("click", function () {
    currentFilter = "completed";
    renderTasks(currentFilter);
});


addButton.addEventListener("click", function () {

    const task = taskInput.value;
    if (task.trim() === "") {
        alert("please enter your task")
    }

    else {
        addTask(task);
        renderTasks(currentFilter);
    }
    taskInput.value = "";
})


renderTasks(currentFilter);