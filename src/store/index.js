import { createStore } from 'vuex';
import Status from '../models/status';

const testTask = {
  id: 1,
  title: 'Тестовая таска',
  status: 'active',
  deadline: new Date().toLocaleDateString(),
  description: 'Самый важный текст'
};

const store = createStore({
  namespaced: true,
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('tasks')) ?? [testTask],
      stateStatus: {
        active: new Status('primary', 'Активен'),
        cancelled: new Status('danger', 'Отменен'),
        done: new Status('primary', 'Завершен'),
        pending: new Status('warning', 'Выполняется')
      }
    };
  },
  mutations: {
    addNewTask({ tasks }, task) {
      tasks.unshift(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },
    changeTaskStatus({ tasks }, { taskId, newStatus }) {
      const task = tasks.find(x => x.id === Number(taskId));
      task.status = newStatus;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
  getters: {
    getAllTasks: ({ tasks }) => tasks,
    getCountActiveTasks: ({ tasks }) => tasks.filter(x => x.status === 'active' || x.status === 'pending').length,
    getAllTaskByStatus: ({ tasks }) => status => tasks.filter(x => x.status === status),
    getTaskById: state => id => state.tasks.find(x => x.id === Number(id)),
    getStateStatus: ({ stateStatus }) => stateStatus
  }
});

export default store;
