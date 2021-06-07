// import { expect, test } from "@jest/globals"
import {
  getProjectsLS, updateProjectLS, addProjectLS, deleteProjectLS,
} from "../src/localstorage"

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
};

global.localStorage = new LocalStorageMock;

test("local storage is empty", () => {
  expect(getProjectsLS()).toEqual([]);
} )

// test("local storage is not empty", () => {
//   const projectTest = {title:"projectTest"}
//   addProjectLS(projectTest);
//   expect(localStorage).not.toEqual([]);
// })

test("add project to LS", () => {
  const projectTest = {title:"projectTest"}
  addProjectLS(projectTest);  
  expect(JSON.parse(localStorage.getItem("projects"))).toEqual([{"id": 0, "title": "projectTest"}]);
})

