// factory function for to-do
const todoFactory = (title) => {

  // const setDate = () =>  handle dates
  // const updateStatus = 
  const setDescription = str => {
    this.description = str;
  }
  const setPriority = int => {
    this.priority = int;
  }

  const getDescription = () => this.description;
  const getPriority = () => this.priority;
  const getDate = () => this.date;

  return { title, setDescription, setPriority, getDescription, getPriority, getDate };
};

// const myTodo = todoFactory('Water plants');
// myTodo.title = "Water my plants"
// myTodo.setPriority(1);
// console.log(myTodo)
