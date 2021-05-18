import { updateProjectLS } from "./localstorage";
import { form } from "./form";

const displayTasks = project => {
  const projectTasks = project.tasks;
  const container = document.createElement("div");
  container.className = "toDos-div";

  const projectTitle = document.createElement("h4");
  projectTitle.innerHTML = project.title;

  const ulContainer = document.createElement("ul");
  ulContainer.className = "ul-container";

  // delete Task 

  const taskDelete = (project, task) => {
    let taskDelete = document.createElement("button");
    let trashIcon = document.createElement("i");
    trashIcon.className = "fas fa-trash";
    taskDelete.appendChild(trashIcon);

    taskDelete.onclick = () => {
      project.deleteTask(task.title)
      updateProjectLS(project);
      const taskElement = document.querySelector(`.task-li-${task.id}`);
      taskElement.remove();
      let taskTitle = document.querySelector(".showTaskLi")
      if (taskTitle && taskTitle.innerHTML === `Title: ${task.title}`) {removeTaskDetail();}
    }
    return taskDelete;
  }

  // update Task

  const taskUpdate = (project, task) => {
   
    let taskUpdate = document.createElement("button");
 
     taskUpdate.innerHTML = "Update";
 

    taskUpdate.onclick = () => {

      let taskForm = document.querySelector(".task-modal");
      if (taskForm) { taskForm.remove() };
      document.body.appendChild(form());
      taskForm = document.querySelector(".task-modal");
      taskForm.className = "task-modal update-task";
      taskForm.elements.title.value = task.title;
      taskForm.elements.description.value = task.description;
      taskForm.elements.priority.value = task.priority;
      taskForm.elements.date.value = task.date;


   window.onclick = (event) => {
     if(event.target !== taskForm &&  event.target !== taskUpdate
      && event.target !== taskForm.childNodes[0]
      && event.target !== taskForm.childNodes[1]
      && event.target !== taskForm.childNodes[2]
      && event.target !== taskForm.childNodes[3]) {
      console.log(event.target)
      taskForm.style.display = "none";
     }

     
   }

      taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        task.title = taskForm.elements.title.value;
        task.description = taskForm.elements.description.value;
        task.priority = taskForm.elements.priority.value;
        task.date = taskForm.elements.date.value;
        updateProjectLS(project);        
        taskForm.style.display = "none";
       let taskT = document.querySelector(`.task-li-${task.id}`);
       taskT.firstChild.innerHTML = task.title;


      });
    }
    return taskUpdate;
  }

  const taskShow = (task) => {
    let taskShow = document.createElement("button");
    taskShow.className = "showTask";
    taskShow.innerHTML = "Show";
    
    taskShow.onclick = () => {
      removeTaskDetail()

      const showTaskUl = document.createElement("ul");
      showTaskUl.className = "showTaskUl";

      const taskTitle = document.createElement("li");
      taskTitle.className = "showTaskLi";
      taskTitle.innerHTML = `Title: ${task.title}`;
      
      const taskDescription = document.createElement("li");
      taskDescription.className = "showTaskLi";
      taskDescription.innerHTML = `Description: ${task.description}`;       
      
      const taskPriority = document.createElement("li");
      taskPriority.className = "showTaskLi";
      taskPriority.innerHTML = `Priority: ${task.priority}`;       
      
      const taskDate = document.createElement("li");
      taskDate.className = "showTaskLi";
      taskDate.innerHTML = `Date: ${task.date}`;

      showTaskUl.appendChild(taskTitle);
      showTaskUl.appendChild(taskDescription);
      showTaskUl.appendChild(taskPriority);
      showTaskUl.appendChild(taskDate);

      document.body.appendChild(showTaskUl);

      window.onclick = (event) => {
        if (event.target !== taskShow 
            && event.target !== showTaskUl.childNodes[0]
            && event.target !== showTaskUl.childNodes[1]
            && event.target !== showTaskUl.childNodes[2]
            && event.target !== showTaskUl.childNodes[3]) {
          showTaskUl.style.display = "none";
        }
      }
    }
    return taskShow;
  }

  projectTasks.forEach((task) => {


    let taskLink = document.createElement("li");
    let taskUpdateBtn = taskUpdate(project, task);
    let taskDeleteBtn = taskDelete(project, task);
    let taskShowBtn = taskShow(task);
    

    taskLink.className = `task-li-${task.id}`;
    let taskTitle = document.createElement("span");
    taskTitle.innerHTML = task.title;

    taskLink.appendChild(taskTitle);
    taskLink.appendChild(taskUpdateBtn);
    taskLink.appendChild(taskDeleteBtn);
    taskLink.appendChild(taskShowBtn);
    ulContainer.appendChild(taskLink);
  });

  const removeTaskDetail = () => {
    let getUl = document.querySelector(".showTaskUl");
    if( getUl  ) {
      getUl.remove();
    }
  }

  container.appendChild(projectTitle);
  container.appendChild(ulContainer);
  return container;
}

export { displayTasks }