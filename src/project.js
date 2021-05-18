import { updateProjectLS } from './localstorage';
import { form } from './form';

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
};

// factory function for project

const projectFactory = (title, tasks = []) => {
  const obj = Object.create(projectProto);
  obj.tasks = tasks;
  obj.title = title;
  return obj;
};

export { projectFactory, projectProto };
