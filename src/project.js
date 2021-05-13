// prototype for project

const projectProto = {
  addTask(task) {
    this.tasks.push(task)
  },
  deleteTask(taskTitle) {
    const taskIndex = this.tasks.findIndex( task => task.title === taskTitle);
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
      taskLink.className = `task-li-${task.id}`;
      taskLink.innerHTML = task.title;
      ulContainer.appendChild(taskLink);
    }); 
    container.appendChild(projectTitle);
    container.appendChild(ulContainer);
    
    return  container;
}
}

// factory function for project

const projectFactory = (title, tasks = []) => {
  let obj = Object.create(projectProto);
  obj.tasks = tasks;
  obj.title = title;
  return obj;
};

export { projectFactory, projectProto }