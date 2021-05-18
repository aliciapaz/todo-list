const create = document.createElement.bind(document);

const form = () => {
  const taskForm = create('form');
  taskForm.className = 'task-modal';

  const inputTitle = create('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('name', 'title');
  inputTitle.setAttribute('placeholder', 'Task name');
  inputTitle.setAttribute('maxlength', '50');
  inputTitle.required = true;


  const inputDescription = create('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('name', 'description');
  inputDescription.setAttribute('placeholder', 'Description');

  const inputPriority = create('select');
  inputPriority.setAttribute('name', 'priority');

  const optionOne = create('option');
  optionOne.setAttribute('value', '1');
  optionOne.innerHTML = 'High';

  inputPriority.appendChild(optionOne);

  const optionTwo = create('option');
  optionTwo.setAttribute('value', '2');
  optionTwo.innerHTML = 'Medium';

  inputPriority.appendChild(optionTwo);

  const optionThree = create('option');
  optionThree.setAttribute('value', '3');
  optionThree.innerHTML = 'Low';

  inputPriority.appendChild(optionThree);

  const inputDate = create('input');
  inputDate.setAttribute('type', 'date');
  inputDate.setAttribute('name', 'date');
  inputDate.setAttribute('value', 'yyyy-mm-dd');

  const submitBtn = create('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'OK');

  taskForm.appendChild(inputTitle);
  taskForm.appendChild(inputDescription);
  taskForm.appendChild(inputPriority);
  taskForm.appendChild(inputDate);
  taskForm.appendChild(submitBtn);

  return taskForm;
};

const newProjectForm = () => {
  const projectForm = create('form');
  projectForm.className = 'project-form';

  const inputTitle = create('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('name', 'title');
  inputTitle.setAttribute('placeholder', 'Project name');

  const submitBtn = create('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'OK');

  projectForm.appendChild(inputTitle);
  projectForm.appendChild(submitBtn);

  return projectForm;
};

export { form, newProjectForm };