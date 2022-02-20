import TodoHelpers from './todoHelper.js';
import { TasksContainer, InputBox } from './elements.js';

const SetupTasks = () => {
  const tasks = TodoHelpers.RetrieveTasks();
  TodoHelpers.RenderTasks(tasks, TasksContainer);
};

const AddTask = () => {
  const taskDescription = InputBox.value.trim();
  const currentTaskList = TodoHelpers.RetrieveTasks();
  let updatedTaskList = [];

  if (taskDescription) {
    updatedTaskList = TodoHelpers.CreateTaskEntry(currentTaskList, taskDescription);
    TodoHelpers.UpdateTaskStore(updatedTaskList);
    TodoHelpers.RenderTasks(updatedTaskList, TasksContainer);
    console.log(updatedTaskList);
    InputBox.value = '';
  }
};

export { SetupTasks, AddTask}