console.log('hello')

const tasks = [];

const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function sayHello() {
    console.log("Hello");
}
sayHello();

function greet(name) {
    console.log("Hello " + name);
}
greet("kayasd")


addButton.addEventListener("click", function () {

    const task = taskInput.value;
    if (task.trim() === "") {
        alert("please enter your task")
    }

    else {

        const newTask = {
            text: task,
            completed: false
        }
        tasks.push(newTask);

        const listItem = document.createElement("li");
        listItem.textContent = task;
        listItem.classList.add("listItems")

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        const completeButton = document.createElement("button");
        completeButton.textContent = "complete";
        deleteButton.classList.add("buttons")
        completeButton.classList.add("buttons")


        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";

        deleteButton.addEventListener("click", function () {
            const index = tasks.indexOf(newTask);
            tasks.splice(index, 1);
            listItem.remove();
            console.log(index);
        })

        completeButton.addEventListener("click", function () {
            listItem.classList.toggle("completed");
            newTask.completed = !newTask.completed;
            console.log(tasks);
        })
    }
})
