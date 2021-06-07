/**
 * @jest-environment jsdom
 */
 import { form, newProjectForm } from '../src/form.js';

 test("create a form", () => {
   const taskForm = form();
   document.body.appendChild(taskForm); 
   expect(taskForm.tagName).toBe('FORM');
 })
 
 test("create a newProjectForm ", () => {
  const projectForm = newProjectForm ();
  document.body.appendChild(projectForm); 
  expect(projectForm.tagName).toBe('FORM');
})

