class TaskHelpers {
  static CreateBookEntry(existingTasks, taskDescription) {
    const id = existingTasks.length === 0 ? 0 : existingTasks.length;
    const updatedTasks = existingTasks;

    updatedTasks.push({
      index: id,
      description: taskDescription,
      completed: false,
      cleared: false,
    });

    return updatedTasks;
  }

  static UpdateTaskStore = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static RetrieveTasks = () => {
    try {
      Array.from((JSON.parse(localStorage.getItem('tasks'))));
    } catch (err) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('tasks'));
  };

  static RenderTasks = (tasksList, tasksContainer) => {
    const filteredTasks = tasksList.filter((task) => task.cleared === true);
    if (filteredTasks.length > 0) {
      let tasksListHTML = '';
      filteredTasks.forEach((item) => {
        tasksListHTML += `<li class="list-item" id="item-${item.index}">
        <div class="left">
          <input type="checkbox" ${item.completed ? 'checked' : ''}/>
          <p class="description">${item.description}</p>
        </div>
        <div class="right">
          <button class="more-options">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>           
        </div>
      </li>`;
      });
      tasksContainer.innerHTML = tasksListHTML;
    } else {
      tasksContainer.innerHTML = 'You do not have any pending tasks';
    }
  };
}

export default TaskHelpers;