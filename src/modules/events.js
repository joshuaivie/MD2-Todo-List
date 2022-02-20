import { AddTask, DeleteTask, CaptureEditableDescription } from './todoManager.js';

const HandleEvents = () => {
  document.body.addEventListener('keyup', (event) => {
    if (event.target.id === 'todo-input' && event.key === 'Enter') {
      AddTask(event);
    }
  });

  document.body.addEventListener('click', (event) => {
    if (event.target.id.includes('delete-')) {
      const eventTargetIDArray = event.target.id.split('-');
      const taskID = parseInt(eventTargetIDArray[eventTargetIDArray.length - 1], 10);
      DeleteTask(taskID);
    }

    if (event.target.id.includes('edit-')) {
      const eventTargetIDArray = event.target.id.split('-');
      const taskID = parseInt(eventTargetIDArray[eventTargetIDArray.length - 1], 10);
      CaptureEditableDescription(taskID);
    }
  });
};

export default HandleEvents;