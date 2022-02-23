import './style.css';
import TaskList, { list, inputTodo } from './modules/taskList.js';

const addTodoBtn = document.querySelector('.submit');
const clearList = document.querySelector('.clear');

const myTasks = new TaskList();

document.addEventListener('DOMContentLoaded', () => {
  myTasks.getFromLocal(myTasks.tasks);
  myTasks.renderTodo(list);
});

addTodoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  myTasks.addTodo(inputTodo.value, myTasks.tasks);
  myTasks.renderTodo(list);
  myTasks.saveTolocal();
});

clearList.addEventListener('click', () => {
  myTasks.clearCompleted();
  myTasks.saveTolocal();
  myTasks.renderTodo(list);
});
