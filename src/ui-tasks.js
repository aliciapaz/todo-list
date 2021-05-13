import { format } from "date-fns";
import { todoFactory } from "./todo.js";
import { projectFactory, projectProto } from "./project";
import { updateProjectLS } from "./localstorage"
import "./style.css";

const toDos = (project) => {
  const element = document.createElement("div");
  element.className = "todos-container"

  const clearTasks = () => {
    let tasksList = document.querySelector(".toDos-div");
    if (tasksList) {tasksList.remove()}
  }

  // New task
  const formContainer  = document.createElement("div")

  const newTaskBtn = document.createElement("h3");
  newTaskBtn.innerHTML = "New Task";

  const taskForm = document.createElement("form");
  taskForm.className = "taskModal";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("placeholder", "Task name");

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "description");
  inputDescription.setAttribute("placeholder", "Description");

  const inputPriority = document.createElement("select");
  inputPriority.setAttribute("name", "priority");

  const optionOne = document.createElement("option");
  optionOne.setAttribute("value", "1");
  optionOne.innerHTML = "High";

  inputPriority.appendChild(optionOne);

  const optionTwo = document.createElement("option");
  optionTwo.setAttribute("value", "2");
  optionTwo.innerHTML = "Medium";

  inputPriority.appendChild(optionTwo);

  const optionThree = document.createElement("option");
  optionThree.setAttribute("value", "3");
  optionThree.innerHTML = "Low";

  inputPriority.appendChild(optionThree);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("value", "yyyy-mm-dd");

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "OK");

  taskForm.appendChild(inputTitle);
  taskForm.appendChild(inputDescription);
  taskForm.appendChild(inputPriority);
  taskForm.appendChild(inputDate);
  taskForm.appendChild(submitBtn);

  formContainer.appendChild(newTaskBtn);
  formContainer.appendChild(taskForm);

  element.appendChild(formContainer);

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

  return element;
};

export { toDos };
