import { format } from "date-fns";
import { todoFactory } from "./todo.js";
import { projectFactory, projectProto } from "./project";
import "./style.css";

const toDos = (project) => {
 let projectTasks = project.getTasks();

  const displayTodos = () => {

    const container = document.createElement("div");
    container.className = "toDos-div";

    const ulContainer = document.createElement("ul");
    ulContainer.className = "ul-container";

    projectTasks.forEach((task) => {
      let taskLink = document.createElement("li");
      taskLink.className = `task-li-${task.id}`;
      taskLink.innerHTML = task.title;
            
    });

   //task.id = projectTasks.indexOf(task);

    // New task

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
    inputTitle.setAttribute("name", "priority");

    const optionOne = document.createElement("option")
    optionOne.setAttribute("value", "1");
    optionOne.innerHTML = "High";

    inputPriority.appendChild(optionOne);

    const optionTwo = document.createElement("option")
    optionTwo.setAttribute("value", "2");
    optionTwo.innerHTML = "Medium";

    inputPriority.appendChild(optionTwo);

    const optionThree = document.createElement("option")
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
    
    container.appendChild(newTaskBtn);
    container.appendChild(taskForm);

    return container;
  
  }

  return displayTodos();
};

export { toDos };