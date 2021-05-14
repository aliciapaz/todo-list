const form = () => {
  const taskForm = document.createElement("form");
  taskForm.className = "taskModal";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("placeholder", "Task name");

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("type", "text");
  inputDescription.setAttribute("name", "description");
  inputDescription.setAttribute("placeholder", "Description");

  const inputPriority = document.createElement("select");
  inputPriority.setAttribute("name", "priority");

  const optionOne = document.createElement("option");
  optionOne.setAttribute("value", "1");
  optionOne.innerHTML = "High";

  inputPriority.appendChild(optionOne);

  const optionTwo = document.createElement("option");
  optionTwo.setAttribute("value", "2");
  optionTwo.innerHTML = "Medium";

  inputPriority.appendChild(optionTwo);

  const optionThree = document.createElement("option");
  optionThree.setAttribute("value", "3");
  optionThree.innerHTML = "Low";

  inputPriority.appendChild(optionThree);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.setAttribute("name", "date");
  inputDate.setAttribute("value", "yyyy-mm-dd");

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "OK");

  taskForm.appendChild(inputTitle);
  taskForm.appendChild(inputDescription);
  taskForm.appendChild(inputPriority);
  taskForm.appendChild(inputDate);
  taskForm.appendChild(submitBtn);

  return taskForm;
}

const newProjectForm = () => {
  const projectForm = document.createElement("form");
  projectForm.className = "project-form";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("placeholder", "Project name");

  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "OK");

  projectForm.appendChild(inputTitle);
  projectForm.appendChild(submitBtn);

  return projectForm;

}
 
export { form, newProjectForm }