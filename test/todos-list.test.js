/**
 * @jest-environment jsdom
 */

import {projectFactory} from "../src/project"
import displayTasks from "../src/todos-list";

afterEach(() => {
  localStorage.clear();
});

test("displays a container with tasks", () => {
  const testProject = projectFactory('My test project')
  testProject.addTask({title: 'My task'})
  const tasksContainer = displayTasks(testProject);
  document.body.appendChild(tasksContainer);
  expect(document.querySelector(".tasks-container").tagName).toBe("DIV");
});

test('deletes a task from the tasks container', ()=> {
  const myTestProject = projectFactory('My test project')
  myTestProject.addTask({title: 'My first task'})
  document.body.appendChild(displayTasks(myTestProject))
  const tasksList = document.querySelector('.tasks-list')
  const tasksBtns = document.querySelector('.task-btns-0')
  const deleteTaskBtn = tasksBtns.childNodes[1]
  deleteTaskBtn.click()
  expect(tasksList.childElementCount).toBe(0)
})

test('Show a task ', ()=> {
  const myTestProject = projectFactory('My test project')
  myTestProject.addTask({title: 'My first task'})
  document.body.appendChild(displayTasks(myTestProject))
  const showTask = document.querySelector('.showTask')
  showTask.click()
  const tasksUl = document.querySelector('.showTaskUl');
  expect(tasksUl.tagName).toBe('UL')
})

test('Display form functionality on update button', ()=> {
  const myTestProject = projectFactory('My test project')
  myTestProject.addTask({title: 'My first task'})
  document.body.appendChild(displayTasks(myTestProject))
  const tasksBtns = document.querySelector('.task-btns-0')
  const updateTaskBtn = tasksBtns.childNodes[0]
  updateTaskBtn.click()
  let taskForm = document.querySelector('.update-task');
  expect(taskForm.tagName).toBe('FORM')
})