/**
 * @jest-environment jsdom
 */

import panel from '../src/ui-projects';

afterEach(() => {
  localStorage.clear();
});

test('Panel creation', () => {
  const panelTest = panel();
  document.body.appendChild(panelTest);
  const asideTest = document.getElementsByTagName('ASIDE');
  expect(asideTest[0].className).toEqual('side-panel');
});

test('Creation of task form', () => {
  const panelTest = panel();
  document.body.appendChild(panelTest);
  const buttonTask = document.querySelector('.add-task-btn');
  buttonTask.click();
  const taskModal = document.querySelector('.task-modal');
  expect(taskModal.tagName).toBe('FORM');
});

test('New project button', () => {
  const panelTest = panel();
  document.body.appendChild(panelTest);
  const newProject = document.querySelector('.new-project');
  expect(newProject.tagName).toBe('DIV');
});

test('New project form creation ', () => {
  const panelTest = panel();
  document.body.appendChild(panelTest);
  const newProjectButton = document.querySelector('.new-project');
  newProjectButton.click();
  const projectForm = document.querySelector('.project-form');
  expect(projectForm.tagName).toBe('FORM');
});

test('Adds a project to the projects list', () => {
  const panelTest = panel();
  document.body.appendChild(panelTest);
  const newProjectButton = document.querySelector('.new-project');
  newProjectButton.click();
  const projectForm = document.querySelector('.project-form');
  projectForm.elements.title.value = 'Test project';
  projectForm.submit();
  const projectListItem = document.querySelector('.project-li-1');
  expect(projectListItem.innerHTML).toMatch(/Test project/);
});

test('Removes a project from the projects list', () => {
  const panelTestNew = panel();
  document.body.appendChild(panelTestNew);
  const newProjectButton = document.querySelector('.new-project');
  newProjectButton.click();
  const projectForm = document.querySelector('.project-form');
  projectForm.elements.title.value = 'Test project new';
  projectForm.submit();
  const projectList = document.querySelector('.projects-ul');
  const projectListItem = document.querySelector('.project-li-1');
  const deleteBtn = projectListItem.childNodes[1];
  deleteBtn.click();
  expect(projectList.childElementCount).toBe(1);
});
