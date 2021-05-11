import { format } from 'date-fns';

// Todo prototype 
const todoProto = {
  setDescription(str) {
    this.description = str;
  },
  setPriority(int) {
    this.priority = int;
  },
  getDescription() {
    return this.description;
  },
  getPriority() {
    return this.priority;
  },
  getDate() {
    return this.date;
  }
}

// factory function for to-do
const todoFactory = (title) => {
   // const setDate = () =>  handle dates
  // const updateStatus = 
  let obj = Object.create(todoProto);
  obj.title = title;
  return obj
};

export {todoFactory};