import "./style.css";

const list = document.querySelector(".list");
const inputTodo = document.querySelector(".add-todo");
const addTodoBtn = document.querySelector(".submit");

class TodoTask {
  constructor(desp, arr, done = false) {
    this.desp = desp;
    this.index = arr.length;
    this.done = done;
  }
}

class TaskLisk {
  constructor() {
    this.tasks = [];
  }
}
