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