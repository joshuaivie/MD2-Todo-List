// import './index.css';
import { SetupTasks, AddTask } from './modules/todoManager.js';

SetupTasks();

document.body.addEventListener('keyup', (event) => {
  if (event.target.id === 'todo-input' && event.key === 'Enter') {
    AddTask(event);
  }
});