function taskAdd() {
    const taskList = document.querySelector('#taskList');

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    taskContainer.appendChild(checkbox);

    const taskName = document.createElement('div');
    taskName.classList.add('task');
    taskName.textContent = 'Task Name';
    taskContainer.appendChild(taskName);

    const taskDate = document.createElement('div');
    taskDate.classList.add('taskDate');
    taskDate.textContent = '3 days ago';
    taskContainer.appendChild(taskDate);

    const taskEdit = document.createElement('div');
    taskEdit.classList.add('taskEdit');
    const edit = document.createElement('a');
    edit.id = 'edit';
    edit.href = '#';
    edit.textContent = '🖍️';
    taskEdit.appendChild(edit);
    taskContainer.appendChild(taskEdit);

    const deleteTask = document.createElement('div');
    deleteTask.classList.add('deleteTask');
    deleteTask.textContent = 'del';
    taskContainer.appendChild(deleteTask);

    taskList.appendChild(taskContainer);

    return taskList;
}

export default taskAdd;