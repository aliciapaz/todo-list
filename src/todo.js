import { format } from 'date-fns';

// To-do prototype 
const todoProto = {
  setDescription(str) {
    this.description = str;
  },
  setPriority(int) {
    this.priority = int;
  },

  setDate(date) {
    this.date = date;
  },
  
  getDescription() {
    return this.description;
  },
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
const todoFactory = (title, description, priority, date) => {
  let obj = Object.create(todoProto);
  obj.title = title;
  obj.description = description;
  obj.priority = priority;
  obj.date = date;
  return obj
};

export {todoFactory};