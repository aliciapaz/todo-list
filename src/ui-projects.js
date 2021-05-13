import { format } from "date-fns";
import { projectFactory, projectProto } from "./project";
import { todoFactory } from "./todo.js";
import { toDos } from "./ui-tasks"; 
import "./style.css";


const panel = () => {
  let projects = [];
  const element = document.createElement("aside");
  element.className = "side-panel";

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";

  const getProjectsFromLS = () => {
    if (localStorage.getItem("projects") === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    return projects;
  }

  const clearProjects = () => {
    let projectsList = document.querySelector(".projects-ul");
    projectsList.remove();
  }

  const createDeleteBtn = (project, projectLI) => {
    let deleteBtn = document.createElement("button")
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    deleteBtn.appendChild(deleteIcon);
    projectLI.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      deleteProject(project);
      displayProjects();
    });
  }

  const createToDosBtn = (project, projectLI) => {
    let toDosBtn = document.createElement('button');
    let toDoIcon = document.createElement('i'); // add icon for to do 
    toDosBtn.innerHTML = "Add task";
    projectLI.appendChild(toDosBtn);
    toDosBtn.addEventListener('click', () => {
      let todosContainer = document.querySelector('.todos-container')
      if (todosContainer) { todosContainer.remove() };
      document.body.appendChild(toDos(project));
    });
  }

  const createShowProjectTasksButton = (project, projectLI) => {
    let toDosShowBtn = document.createElement('button');
    toDosShowBtn.innerHTML = "Show";
    projectLI.appendChild(toDosShowBtn);
     toDosShowBtn.addEventListener('click', () => {
       let todosContainer = document.querySelector('.todos-container')
    // if (projectContainer.children.length > 0) {
    //    clear();
    //  } 
       document.body.appendChild(project.displayTasks());
     });
  }


  const deleteProject = (project) => {
    deleteProjectLS(project);
    const deletedProject = document.querySelector(`.project-li-${project.id}`)
    deletedProject.remove();
    location.reload()
  }


  const displayProjects = () => {
    if (projectContainer.children.length > 0) {
      clearProjects();
    }
    const projectList = document.createElement("ul");
    projectList.className = "projects-ul";
    getProjectsFromLS();
    projects.forEach((project) => {
      Object.setPrototypeOf(project, projectProto)
      let projectLink = document.createElement("li");
      projectLink.className = `project-li-${project.id}`;
      projectLink.innerHTML = project.title;
      createDeleteBtn(project, projectLink);
      createToDosBtn(project, projectLink);
      createShowProjectTasksButton(project, projectLink);
      projectList.appendChild(projectLink);
    });
    projectContainer.appendChild(projectList);
  }

  if (localStorage.getItem("projects") != null) {
    displayProjects();
  }

  element.appendChild(projectContainer);

  // New Project UI
  const newProjectBtn = document.createElement("p");
  newProjectBtn.innerHTML = "New project";

  const projectForm = document.createElement("form");
  projectForm.className = "project-form";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("placeholder", "Project name");

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "OK");

  projectForm.appendChild(inputTitle);
  projectForm.appendChild(submitBtn);

  const newProject = (str) => {
    const myProject = projectFactory(str);

    storeProjectLS(myProject);
  };

  // Store project ls

  const storeProjectLS = (project) => {
    if (localStorage.getItem("projects") === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem("projects"));
    }
    projects.push(project);
    project.id = projects.indexOf(project);
    localStorage.setItem("projects", JSON.stringify(projects));

    return projects;
  }

  // Delete project from localstorage
   
  const deleteProjectLS = myProject => {
    projects = JSON.parse(localStorage.getItem("projects"));
    let projectIndex = projects.findIndex(project => myProject.title === project.title)
    projects.splice(projectIndex, 1)
    localStorage.setItem("projects", JSON.stringify(projects));

    return projects;
  }


  newProjectBtn.onclick = () => {
    projectForm.style.display = "block";

  };


  // window.onclick = (event) => {
  //   if (event.target === projectForm) {
  //     projectForm.style.display = 'none';
  //   }
  // }; 

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = projectForm.elements.title.value;
    newProject(title);
    projectForm.style.display = "none";
    displayProjects();
  }); // add client-side validations for empty or too long strings

  element.appendChild(newProjectBtn);
  element.appendChild(projectForm);

  return element;
};

export { panel as default };
