import {todoFactory} from "./todo.js";

// factory function for project

const projectFactory = (title, tasks = []) => {

  const addTask = task => {
    tasks.push(task);
}
  const deleteTask = toDoTitle => {
    const taskIndex = tasks.findIndex( task => task.title === toDoTitle);
    return tasks.splice(taskIndex, 1);
  }

  const getTasks = () => tasks;

  return { title, addTask, deleteTask, getTasks };
};

const myProject = projectFactory("Default");

 const myTodo = todoFactory('Water plants');
 console.log(myTodo)

 myProject.addTask(myTodo);
 console.log(myProject.getTasks());