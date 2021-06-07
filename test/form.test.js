/**
 * @jest-environment jsdom
 */
import { form, newProjectForm } from "../src/form";

test("create a form", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  expect(taskForm.tagName).toBe("FORM");
});

test("has a title input", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const title = document.querySelector('[name = "title"]');
  expect(title.tagName).toBe("INPUT");
});

test("has a description input", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const description = document.querySelector('[name = "description"]');
  expect(description.tagName).toBe("INPUT");
});

test("has a priority select", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const priority = document.querySelector('[name = "priority"]');
  expect(priority.tagName).toBe("SELECT");
});

test("has a priority select with three options", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const priority = document.querySelector('[name = "priority"]');
  expect(priority.childElementCount).toBe(3);
});

test("has a date input", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const date = document.querySelector('[type = "date"]');
  expect(date.tagName).toBe("INPUT");
});

test("has a submit button", () => {
  const taskForm = form();
  document.body.appendChild(taskForm);
  const submitBtn = document.querySelector('[type = "submit"]');
  expect(submitBtn.tagName).toBe("INPUT");
});

test("create a newProjectForm ", () => {
  const projectForm = newProjectForm();
  document.body.appendChild(projectForm);
  expect(projectForm.tagName).toBe("FORM");
});

test("has a title input", () => {
  const projectForm = newProjectForm();
  document.body.appendChild(projectForm);
  const title = document.querySelector('[name = "title"]');
  expect(title.tagName).toBe("INPUT");
});

test("has a submit button", () => {
  const projectForm = newProjectForm();
  document.body.appendChild(projectForm);
  const submitBtn = document.querySelector('[type = "submit"]');
  expect(submitBtn.tagName).toBe("INPUT");
});
