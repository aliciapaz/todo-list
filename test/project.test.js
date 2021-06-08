import { projectFactory } from '../src/project';

test('creates a project with a specified title', () => {
  const myProject = projectFactory('My Test Project');
  expect(myProject.title).toBe('My Test Project');
});

test('creates a project with an empty task array', () => {
  const myProject = projectFactory('My Test Project');
  expect(myProject.tasks).toEqual([]);
});

test('AddTask', () => {
  const myTestProj = projectFactory('My test project');
  const myTestTask = {
    title: 'My test Task',
    description: '',
    priority: '',
    date: '',
    id: 0,
  };
  myTestProj.addTask(myTestTask);
  expect(myTestProj.tasks).toEqual([
    {
      title: 'My test Task', description: '', priority: '', date: '', id: 0,
    },
  ]);
});

test('deleteTask', () => {
  const myTestProj = projectFactory('My test project');
  const myTestTask = {
    title: 'My test Task',
    description: '',
    priority: '',
    date: '',
    id: 0,
  };
  myTestProj.addTask(myTestTask);
  myTestProj.deleteTask('My test Task');
  expect(myTestProj.tasks).toEqual([]);
});

test('getTasks', () => {
  const myTestProj = projectFactory('My test project');
  const myTestTask = {
    title: 'My test Task',
    description: '',
    priority: '',
    date: '',
    id: 0,
  };
  myTestProj.addTask(myTestTask);
  expect(myTestProj.getTasks()).toEqual([
    {
      title: 'My test Task', description: '', priority: '', date: '', id: 0,
    },
  ]);
});
