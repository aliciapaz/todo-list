import {todoFactory} from "./todo.js";

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
  }
}

// factory function for project

const projectFactory = (title, tasks = []) => {
  let obj = Object.create(projectProto);
  obj.tasks = tasks;
  obj.title = title;
  return obj;
};