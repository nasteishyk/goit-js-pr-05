import { form, list } from "./refs"
import { renderTask } from "./refs"
import { saveTaskToLocalStorage, deleteTaskInLocalStorage, renderTasksFromLocalStorage } from "./local-storage-api"

renderTasksFromLocalStorage()

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();

  const taskName = event.target.taskName.value.trim();
  const taskDescription = event.target.taskDescription.value.trim();

  if (!taskName || !taskDescription) {
    alert('Fill in all form fields');
    return;
  }

  saveTaskToLocalStorage({ title: taskName, description: taskDescription })

  renderTask({ title: taskName, description: taskDescription })
  
  event.target.taskName.value = '';
  event.target.taskDescription.value = '';
}

list.addEventListener("click", (event) => {
    if (!event.target.classList.contains("task-list-item-btn")) {
        return
    }

    const deleteItem = event.target.closest(".task-list-item")
    const deleteItemIdx = [...list.children].indexOf(deleteItem)
    
    deleteTaskInLocalStorage(deleteItemIdx)
    
    deleteItem.remove()

})

