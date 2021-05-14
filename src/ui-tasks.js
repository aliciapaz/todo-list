import { format } from "date-fns";
import { todoFactory } from "./todo.js";
import { projectFactory, projectProto } from "./project";
import { updateProjectLS } from "./localstorage"
import { form } from "./form"
import "./style.css";

const toDos = (project) => {
  const element = document.createElement("div");
  element.className = "todos-container"

  const clearTasks = () => {
    let tasksList = document.querySelector(".toDos-div");
    if (tasksList) {tasksList.remove()}
  }

  let taskForm = form()
  element.appendChild(taskForm);

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = taskForm.elements.title.value;
    const description = taskForm.elements.description.value;
    const priority = taskForm.elements.priority.value;
    const date = taskForm.elements.date.value;

    let myTask = todoFactory(title, description, priority, date);
    project.addTask(myTask);
    updateProjectLS(project);
    taskForm.parentNode.style.display = "none";
    clearTasks()
    document.body.appendChild(project.displayTasks());
  });
  
  let addTaskBtn = document.querySelector(".add-task-btn")
  
  return element;
};

export { toDos };
