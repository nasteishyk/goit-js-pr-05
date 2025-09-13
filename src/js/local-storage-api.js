import { list } from "./refs"

export function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export function deleteTaskInLocalStorage(idxToRemove) {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    const updateTasks = tasks.filter((element, index) => index !== idxToRemove)

    localStorage.setItem("tasks", JSON.stringify(updateTasks))
}

export function renderTasksFromLocalStorage() { 
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    list.innerHTML = ""

    const markup = tasks.map(({ title, description }) => `
        <li class="task-list-item">
          <button class="task-list-item-btn">Delete</button>
          <h3>${title}</h3>
          <p>${description}</p>
        </li>`).join("")

    list.innerHTML = markup
}