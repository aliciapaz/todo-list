import todoFactory from '../src/todo'

test('creates a to-do object with a specified title', ()=> {
  const myTodo = todoFactory("Test To Do")
  expect(myTodo.title).toBe('Test To Do')
})

test('inequality for a different title', ()=> {
  const myTodo = todoFactory('titleA')
  expect(myTodo.title).not.toBe('titleB')
})
