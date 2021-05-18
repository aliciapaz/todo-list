import { projectFactory, projectProto } from "./project";
import {
  getProjectsLS,
  addProjectLS,
  updateProjectLS,
  deleteProjectLS,
} from "./localstorage";
import { todoFactory } from "./todo.js";
import { form, newProjectForm } from "./form";
import { displayTasks } from "./todos-list";
import "./style.css";

const panel = () => {
  const query = document.querySelector.bind(document);

  const element = document.createElement("aside");
  element.className = "side-panel";

  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";

  const clearProjects = () => {
    const projectsList = query(".projects-ul");
    projectsList.remove();
  };

  const createDeleteBtn = (project, projectLI) => {
    const deleteBtn = document.createElement("button");
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteBtn.appendChild(deleteIcon);
    projectLI.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      deleteProject(project);
      displayProjects();
    });
  };

  const toDos = (project) => {
    const clearTasks = () => {
      const tasksList = query(".tasks-container");
      if (tasksList) {
        tasksList.remove();
      }
    };

    const taskForm = form();
    document.body.appendChild(taskForm);

    // let addTaskBtn = document.querySelector(".add-task-btn")
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = taskForm.elements.title.value;
      const description = taskForm.elements.description.value;
      const priority = taskForm.elements.priority.value;
      const date = taskForm.elements.date.value;

      const myTask = todoFactory(title, description, priority, date);
      project.addTask(myTask);
      updateProjectLS(project);
      taskForm.style.display = "none";
      clearTasks();
      document.body.appendChild(displayTasks(project));
    });

    return taskForm;
  };

  const createToDosBtn = (project, projectLI) => {
    const toDosBtn = document.createElement("button");
    toDosBtn.className = "add-task-btn";
    toDosBtn.innerHTML = "Add task";
    projectLI.appendChild(toDosBtn);
    toDosBtn.onclick = () => {
      let taskForm = query(".task-modal");
      if (taskForm) {
        taskForm.remove();
      }

      document.body.appendChild(toDos(project));
      let newTaskForm = query(".task-modal");

      window.onclick = (event) => {
        if (
          event.target !== toDosBtn &&
          event.target !== newTaskForm.childNodes[0] &&
          event.target !== newTaskForm.childNodes[1] &&
          event.target !== newTaskForm.childNodes[2] &&
          event.target !== newTaskForm.childNodes[3] &&
          event.target !== newTaskForm.childNodes[4]
        ) {
          newTaskForm.style.display = "none";
        }
      };
    };
  };

  const createShowProjectTasksButton = (project, projectLI) => {
    const toDosShowBtn = document.createElement("button");
    toDosShowBtn.innerHTML = "Show";
    projectLI.appendChild(toDosShowBtn);
    toDosShowBtn.addEventListener("click", () => {
      const todos = query(".tasks-container");
      if (todos !== null) {
        todos.remove();
      }
      document.body.appendChild(displayTasks(project));
    });
  };

  const deleteProject = (project) => {
    deleteProjectLS(project);
    const deletedProject = query(`.project-li-${project.id}`);
    deletedProject.remove();
    location.reload();
  };

  const displayProjects = () => {
    if (projectsContainer.children.length > 0) {
      clearProjects();
    }
    const projectList = document.createElement("ul");
    projectList.className = "projects-ul";

    const projects = getProjectsLS();

    projects.forEach((project) => {
      Object.setPrototypeOf(project, projectProto);
      const projectLink = document.createElement("li");
      projectLink.className = `project-li-${project.id}`;
      projectLink.innerHTML = project.title;
      createDeleteBtn(project, projectLink);
      createToDosBtn(project, projectLink);
      createShowProjectTasksButton(project, projectLink);
      projectList.appendChild(projectLink);
    });
    projectsContainer.appendChild(projectList);
  };
  
  if (getProjectsLS().length === 0) {
    let defaultProject = projectFactory("Default");
    addProjectLS(defaultProject);
    displayProjects();
  } else {
    displayProjects();
  }

  element.appendChild(projectsContainer);

  // New Project UI
  const newProjectBtn = document.createElement("div");
  newProjectBtn.className = "new-project";
  newProjectBtn.innerHTML = "New project";

  const projectForm = newProjectForm();
  element.appendChild(projectForm);

  const newProject = (str) => {
    const myProject = projectFactory(str);

    addProjectLS(myProject);
  };

  newProjectBtn.onclick = () => {
    projectForm.style.display = "block";
  };

  window.onclick = (event) => {
    if (
      event.target !== newProjectBtn &&
      event.target !== projectForm.firstChild &&
      event.target !== projectForm.parentNode.children
    ) {
      projectForm.style.display = "none";
    }
  };

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = projectForm.elements.title.value;
    newProject(title);
    projectForm.style.display = "none";
    displayProjects();
  });

  newProjectBtn.appendChild(projectForm);
  element.appendChild(newProjectBtn);

  return element;
};

export { panel as default };
