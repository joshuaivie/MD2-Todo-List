// import './index.css';
import renderHTMLList from './modules/toDoList.js';
import AddNewTask from './modules/crud.js';

renderHTMLList();

document.body.addEventListener('keyup', (event) => {
  if (event.target.id === 'todo-input' && event.key === 'Enter') {
    AddNewTask(event);
  }
});