import { AddTask, DeleteTask, CaptureEditableDescription } from './todoManager.js';
import { CaptureCheck } from './todoCompletion.js';

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

  document.body.addEventListener('change', (event) => {
    if (event.target.id.includes('check-')) {
      const checkBoxState = event.target.checked;
      const eventTargetIDArray = event.target.id.split('-');
      const taskID = parseInt(eventTargetIDArray[eventTargetIDArray.length - 1], 10);
      CaptureCheck(taskID, checkBoxState);
    }
  });
};

export default HandleEvents;