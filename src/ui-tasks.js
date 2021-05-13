import { format } from "date-fns";
import { todoFactory } from "./todo.js";
import { projectFactory, projectProto } from "./project";
import "./style.css";

const toDos = (project) => {
  const element = document.createElement("div");
  element.className = "todos-container"

  const displayTodos = (project) => {
    clearTasks();
    const projectTasks = project.getTasks();
    
    const container = document.createElement("div");
    container.className = "toDos-div";

    const projectTitle = document.createElement("h4");
    projectTitle.innerHTML = project.title;

    const ulContainer = document.createElement("ul");
    ulContainer.className = "ul-container";

    projectTasks.forEach((task) => {
      let taskLink = document.createElement("li");
      taskLink.className = `task-li-${task.id}`;
      taskLink.innerHTML = task.title;
      ulContainer.appendChild(taskLink);
    });
    container.appendChild(projectTitle);
    container.appendChild(ulContainer);
    document.body.appendChild(container);
  };

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


  // display tasks

  // Update project ls
  const updateProjectLS = (project) => {
    let projects;
    if (localStorage.getItem("projects") === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    projects[project.id] = project;
    localStorage.setItem("projects", JSON.stringify(projects));
  };

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
    displayTodos(project);
  });

  return element;
};

export { toDos };
