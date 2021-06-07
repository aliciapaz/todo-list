import {
  getProjectsLS, updateProjectLS, addProjectLS, deleteProjectLS,
} from '../src/localstorage';

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
}

global.localStorage = new LocalStorageMock();

test('local storage is empty', () => {
  expect(getProjectsLS()).toEqual([]);
});

test('add project to LS', () => {
  const projectTest = { title: 'projectTest' };
  addProjectLS(projectTest);
  expect(JSON.parse(localStorage.getItem('projects'))).toEqual([{ id: 0, title: 'projectTest' }]);
});

test('get project from LS', () => {
  const projectTest = { title: 'projectTestSecond' };
  addProjectLS(projectTest);
  expect(getProjectsLS()).toEqual([{ id: 0, title: 'projectTest' }, { id: 1, title: 'projectTestSecond' }]);
});

test('delete project from LS', () => {
  const projectDelete = { id: 1, title: 'projectTestSecond' };
  deleteProjectLS(projectDelete);
  expect(getProjectsLS()).toEqual([{ id: 0, title: 'projectTest' }]);
});

test('update project from LS', () => {
  const projectUpdate = { id: 0, title: 'project' };
  updateProjectLS(projectUpdate);
  expect(getProjectsLS()).toEqual([{ id: 0, title: 'project' }]);
});