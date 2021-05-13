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
      
      let taskDelete = document.createElement("button");
      let trashIcon = document.createElement("i");
      trashIcon.className = "fas fa-trash";
      taskDelete.appendChild(trashIcon);
      
      let taskUpdate = document.createElement("button")
      let updateIcon = document.createElement("i");
      updateIcon.className = "fas fa-pencil-alt";
      taskUpdate.appendChild(updateIcon);
      
      taskLink.className = `task-li-${task.id}`;
      taskLink.innerHTML = task.title;
      
      taskDelete.onclick = () => {
        this.deleteTask(task.title)
        updateProjectLS(this);
        const taskElement = document.querySelector(`.task-li-${task.id}`);
        taskElement.remove();
      }

      taskUpdate.onclick = () => {
        let taskForm = document.querySelector("todos-container")
        console.log(taskForm) 
      }

      taskLink.appendChild(taskUpdate);
      taskLink.appendChild(taskDelete);
      ulContainer.appendChild(taskLink);
    });
    container.appendChild(projectTitle);
    container.appendChild(ulContainer);

    return container;
  },
};

// factory function for project

const projectFactory = (title, tasks = []) => {
  let obj = Object.create(projectProto);
  obj.tasks = tasks;
  obj.title = title;
  return obj;
};

export { projectFactory, projectProto };
