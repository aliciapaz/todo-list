import { updateProjectLS } from './localstorage';
import { projectProto } from './project';
import { form } from './form';

const displayTasks = (project) => {
  const projectTasks = project.tasks;
  const container = document.createElement('div');
  container.className = 'tasks-container';

  const projectTitle = document.createElement('h4');
  projectTitle.innerHTML = project.title;

  const ulContainer = document.createElement('ul');
  ulContainer.className = 'tasks-list';

  // delete Task

  const removeTaskDetail = () => {
    const getUl = document.querySelector('.showTaskUl');
    if (getUl) {
      getUl.remove();
    }
  };

  const taskDelete = (project, task) => {
    Object.setPrototypeOf(project, projectProto);
    const taskDelete = document.createElement('button');
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash';
    taskDelete.appendChild(trashIcon);

    taskDelete.onclick = () => {
      project.deleteTask(task.title);
      updateProjectLS(project);
      const taskElement = document.querySelector(`.task-li-${task.id}`);
      taskElement.remove();
      const taskTitle = document.querySelector('.showTaskLi');
      if (taskTitle && taskTitle.innerHTML === `Title: ${task.title}`) { removeTaskDetail(); }
    };
    return taskDelete;
  };

  // update Task

  const taskUpdate = (project, task) => {
    const taskUpdate = document.createElement('button');

    taskUpdate.innerHTML = 'Update';

    taskUpdate.onclick = () => {
      const {
        title, description, priority, date,
      } = task;
      let taskForm = document.querySelector('.task-modal');
      if (taskForm) { taskForm.remove(); }
      document.body.appendChild(form());
      taskForm = document.querySelector('.task-modal');
      taskForm.className = 'task-modal update-task';
      taskForm.elements.title.value = title;
      taskForm.elements.description.value = description;
      taskForm.elements.priority.value = priority;
      taskForm.elements.date.value = date;

      window.onclick = (event) => {
        if (event.target !== taskForm && event.target !== taskUpdate
      && event.target !== taskForm.childNodes[0]
      && event.target !== taskForm.childNodes[1]
      && event.target !== taskForm.childNodes[2]
      && event.target !== taskForm.childNodes[3]) {
          taskForm.style.display = 'none';
        }
      };

      taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        task.title = taskForm.elements.title.value;
        task.description = taskForm.elements.description.value;
        task.priority = taskForm.elements.priority.value;
        task.date = taskForm.elements.date.value;
        updateProjectLS(project);
        taskForm.style.display = 'none';
        const taskT = document.querySelector(`.task-li-${task.id}`);
        const taskBtns = document.querySelector(`.task-btns-${task.id}`);
        taskT.firstChild.innerHTML = task.title;
        if (taskBtns.childNodes[0].tagName === 'TIME') { taskBtns.childNodes[0].innerHTML = task.date; }
      });
    };
    return taskUpdate;
  };

  const taskShow = (task) => {
    const taskShow = document.createElement('button');
    taskShow.className = 'showTask';
    taskShow.innerHTML = 'Show';

    taskShow.onclick = () => {
      const {
        title, description, priority, date,
      } = task;
      removeTaskDetail();

      const showTaskUl = document.createElement('ul');
      showTaskUl.className = 'showTaskUl';

      const taskTitle = document.createElement('li');
      taskTitle.className = 'showTaskLi';
      taskTitle.innerHTML = `Title: ${title}`;

      const taskDescription = document.createElement('li');
      taskDescription.className = 'showTaskLi';
      taskDescription.innerHTML = `Description: ${description}`;

      const taskPriority = document.createElement('li');
      taskPriority.className = 'showTaskLi';
      if (priority === 1) {
        taskPriority.innerHTML = 'Priority: High';
      }
      if (priority === 2) {
        taskPriority.innerHTML = 'Priority: Medium';
      } else {
        taskPriority.innerHTML = 'Priority: Low';
      }

      const taskDate = document.createElement('li');
      taskDate.className = 'showTaskLi';
      taskDate.innerHTML = `Date: ${date}`;

      showTaskUl.appendChild(taskTitle);
      showTaskUl.appendChild(taskDescription);
      showTaskUl.appendChild(taskPriority);
      showTaskUl.appendChild(taskDate);

      document.body.appendChild(showTaskUl);

      window.onclick = (event) => {
        if (event.target !== showTaskUl && event.target !== taskShow) {
          showTaskUl.style.display = 'none';
        }
      };
    };
    return taskShow;
  };

  projectTasks.forEach((task) => {
    const { date, title } = task;
    const taskLink = document.createElement('li');
    const btnsContainer = document.createElement('div');
    const taskUpdateBtn = taskUpdate(project, task);
    const taskDeleteBtn = taskDelete(project, task);
    const taskShowBtn = taskShow(task);

    btnsContainer.className = `task-btns-${task.id}`;
    taskLink.className = `task-li-${task.id}`;
    const taskTitle = document.createElement('span');
    taskTitle.innerHTML = title;

    taskLink.appendChild(taskTitle);

    if (date !== undefined) {
      const taskDue = document.createElement('time');
      taskDue.innerHTML = date;
      btnsContainer.appendChild(taskDue);
    }

    btnsContainer.appendChild(taskUpdateBtn);
    btnsContainer.appendChild(taskDeleteBtn);
    btnsContainer.appendChild(taskShowBtn);
    taskLink.appendChild(btnsContainer);
    ulContainer.appendChild(taskLink);
  });

  container.appendChild(projectTitle);
  container.appendChild(ulContainer);
  return container;
};

export { displayTasks as default };