const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="${task.done ? "status-done" : ""}">${task.name}</td>
            <td>${task.date}</td>
            <td>${task.done ? "Done" : "Pending"}</td>
            <td>
                <button onclick="toggleDone(${index})">✔</button>
                <button onclick="deleteTask(${index})">🗑</button>
            </td>
        `;
    taskList.appendChild(row);
  });
}

function addTask() {
  const taskName = taskInput.value.trim();
  const taskDate = dateInput.value;

  if (taskName === "" || taskDate === "") {
    alert("Please fill both fields!");
    return;
  }

  tasks.push({ name: taskName, date: taskDate, done: false });
  taskInput.value = "";
  dateInput.value = "";
  renderTasks();
}

function toggleDone(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

addBtn.addEventListener("click", addTask);

deleteAllBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

renderTasks();
