export default class TodoTask {
  constructor(desp, arr, done = false) {
    this.desp = desp;
    this.index = arr.length;
    this.done = done;
  }
}
