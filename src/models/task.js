import createRandomId from '../helpers/createRandomId';

class Task {
  constructor(title = '', status = 'active', deadline = new Date().toLocaleDateString(), description = '') {
    this.id = createRandomId();
    this.title = title;
    this.status = status;
    this.deadline = deadline;
    this.description = description;
  }
}

export default Task;
