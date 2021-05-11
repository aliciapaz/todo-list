import { format } from 'date-fns';

// To-do prototype 
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
  // setDate(date) {

  // },
  getPriority() {
    return this.priority;
  },
  getDate() {
    return this.date;
  },
  // updateStatus() {
    
  // }
}

// factory function
const todoFactory = (title) => {
  let obj = Object.create(todoProto);
  obj.title = title;
  return obj
};

export {todoFactory};