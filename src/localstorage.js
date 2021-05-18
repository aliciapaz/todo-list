const getProjectsLS = () => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }
  return projects;
};

const updateProjectLS = (project) => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }
  projects[project.id] = project;
  localStorage.setItem('projects', JSON.stringify(projects));
};

const addProjectLS = (project) => {
  let projects;
  if (localStorage.getItem('projects') === null) {
    projects = [];
  } else {
    projects = JSON.parse(localStorage.getItem('projects'));
  }
  projects.push(project);
  project.id = projects.indexOf(project);
  localStorage.setItem('projects', JSON.stringify(projects));

  return projects;
};

const deleteProjectLS = (myProject) => {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const projectIndex = projects.findIndex((project) => myProject.title === project.title);
  projects.splice(projectIndex, 1);
  localStorage.setItem('projects', JSON.stringify(projects));

  return projects;
};

export {
  getProjectsLS, updateProjectLS, addProjectLS, deleteProjectLS,
};