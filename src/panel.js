import { format } from 'date-fns';
import { projectFactory } from './project'
import { todoFactory } from "./todo.js";
import './style.css';



const panel = () => {
  let projects = []; 
  const element = document.createElement("aside");
  element.className = "side-panel";

  const projectContainer = document.createElement("div");
  projectContainer.className = "project-container";
  const projectList = document.createElement("ul");

  projects.forEach((project) => {
    let projectLink = document.createElement("li");
    projectLink.innerHTML = project.title;
    projectList.appendChild(projectLink);
  });

  projectContainer.appendChild(projectList);
  element.appendChild(projectContainer);
  
  // New Project UI
  const newProjectBtn = document.createElement("p");
  newProjectBtn.innerHTML = "New project";

  const projectForm = document.createElement("form");
  projectForm.className = "projectModal"
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
    
  }

// Store project ls

function storeProjectLS(project) {
  
  if(localStorage.getItem("projects") === null){
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem("projects"));
  }

  projects.push(project);
  
  localStorage.setItem("projects", JSON.stringify(projects));

 return projects;
}


  newProjectBtn.onclick = () => {
    projectForm.style.display = 'block';
  }

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = projectForm.elements.title.value;
    newProject(title);
    projectForm.style.display = 'none';
  }); // add client-side validations for empty or too long strings
  
  element.appendChild(newProjectBtn);
  element.appendChild(projectForm);

  return element;
};

export { panel as default }


