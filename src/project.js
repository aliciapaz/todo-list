import { updateProjectLS } from "./localstorage"
import { form } from "./form";

// prototype for project

const projectProto = {
  addTask(task) {
    this.tasks.push(task);
    task.id = this.tasks.indexOf(task);
  },
  deleteTask(taskTitle) {
    const taskIndex = this.tasks.findIndex((task) => task.title === taskTitle);
    return this.tasks.splice(taskIndex, 1);
  },
  getTasks() {
    return this.tasks;
  },

  displayTasks() {
    const projectTasks = this.tasks;

    const container = document.createElement("div");
    container.className = "toDos-div";

    const projectTitle = document.createElement("h4");
    projectTitle.innerHTML = this.title;

    const ulContainer = document.createElement("ul");
    ulContainer.className = "ul-container";

    projectTasks.forEach((task) => {
      let taskLink = document.createElement("li");

      // delete Task 
      
      let taskDelete = document.createElement("button");
      let trashIcon = document.createElement("i");
      trashIcon.className = "fas fa-trash";
      taskDelete.appendChild(trashIcon);

      taskDelete.onclick = () => {
        this.deleteTask(task.title)
        updateProjectLS(this);
        const taskElement = document.querySelector(`.task-li-${task.id}`);
        taskElement.remove();
        let taskTitle = document.querySelector(".showTaskLi")
        if (taskTitle && taskTitle.innerHTML === `Title: ${task.title}`) {removeTaskDetail();}
      }

      //update Task 
      
      let taskUpdate = document.createElement("button");
      let updateIcon = document.createElement("i");
      updateIcon.className = "fas fa-pencil-alt";
      taskUpdate.appendChild(updateIcon);

      taskUpdate.onclick = () => {
        let taskForm = document.querySelector(".task-modal")
        if (taskForm) { taskForm.remove() }
        document.body.appendChild(form())
        taskForm = document.querySelector(".task-modal")
        taskForm.className = "task-modal update-task"
        taskForm.elements.title.value = task.title;
        taskForm.elements.description.value = task.description;
        taskForm.elements.priority.value = task.priority;
        taskForm.elements.date.value = task.date;

        taskForm.addEventListener("submit", (e) => {
          e.preventDefault();
          task.title = taskForm.elements.title.value;
          task.description = taskForm.elements.description.value;
          task.priority = taskForm.elements.priority.value;
          task.date = taskForm.elements.date.value;
          updateProjectLS(this);
          taskForm.style.display = "none";
          let tasksList = document.querySelector(".toDos-div");
          if (tasksList) {tasksList.remove()}
        });
      }

      // show a Task details 

      let taskShow = document.createElement("button");
      taskShow.className = "showTask";
      taskShow.innerHTML = "Show";
      
      taskLink.className = `task-li-${task.id}`;
      taskLink.innerHTML = task.title;
      
      taskShow.onclick = () => {
        // console.log(task.description);
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
      }

      taskLink.appendChild(taskUpdate);
      taskLink.appendChild(taskDelete);
      taskLink.appendChild(taskShow);
      ulContainer.appendChild(taskLink);
    });
    container.appendChild(projectTitle);
    container.appendChild(ulContainer);
    return container;
  },
};

const removeTaskDetail = () => {
  let getUl = document.querySelector(".showTaskUl");
  if( getUl  ) {
    getUl.remove();
  }
}

// factory function for project

const projectFactory = (title, tasks = []) => {
  let obj = Object.create(projectProto);
  obj.tasks = tasks;
  obj.title = title;
  return obj;
};

export { projectFactory, projectProto };
