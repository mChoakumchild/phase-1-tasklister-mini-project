let form = document.querySelector("#create-task-form")
let taskDescriptionText = document.querySelector("#new-task-description")
let taskList = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
 
});

form.addEventListener("submit", (e) => {
  let newTask = document.createElement('li')
  newTask.innerText = taskDescriptionText.value
  taskList.append(newTask)
  e.preventDefault()
});
