console.log('hello')

const tasks = [];

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(task) {
    console.log(task);
    const newTask = {
        text: task,
        completed: false
    };

    tasks.push(newTask);

    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    const completeButton = document.createElement("button");

    listItem.textContent = task;
    deleteButton.textContent = "delete";
    completeButton.textContent = "complete";

    listItem.classList.add("listItems");
    deleteButton.classList.add("buttons");
    completeButton.classList.add("buttons");

    taskList.appendChild(listItem);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
        const index = tasks.indexOf(newTask);
        tasks.splice(index, 1);
        listItem.remove();
    });

    completeButton.addEventListener("click", function () {
        listItem.classList.toggle("completed");
        newTask.completed = !newTask.completed;
    });
}

addButton.addEventListener("click", function () {

    const task = taskInput.value;
    if (task.trim() === "") {
        alert("please enter your task")
    }

    else {
        addTask(task);
    }
    taskInput.value = "";
})