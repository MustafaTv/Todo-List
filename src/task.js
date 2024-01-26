import Trash from './trash.svg';
import Pen from './pen.svg';
function taskAdd() {
    const addTask = document.querySelector('#taskAdd');
    addTask.addEventListener('click', () => {
        const taskList = document.querySelector('#taskList');

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('taskContainer');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'completed';
        taskContainer.appendChild(checkbox);

        const taskName = document.createElement('div');
        taskName.classList.add('task');
        const task = document.createElement('input');
        task.type = 'text';
        task.placeholder = 'Task Name'
        taskName.appendChild(task);
        taskContainer.appendChild(taskName);

        const taskDate = document.createElement('div');
        taskDate.classList.add('taskDate');
        const date = document.createElement('input');
        date.type = 'date';
        taskDate.appendChild(date);
        taskContainer.appendChild(taskDate);

        const taskEdit = document.createElement('button');
        taskEdit.classList.add('taskEdit');
        const pen = new Image();
        pen.src = Pen;
        taskEdit.appendChild(pen);
        taskContainer.appendChild(taskEdit);

        const deleteTask = document.createElement('button');
        deleteTask.classList.add('deleteTask');
        const trash = new Image();
        trash.src = Trash;
        deleteTask.appendChild(trash);
        taskContainer.appendChild(deleteTask);
        
        taskList.appendChild(taskContainer);

        return taskList;
    });
}

export default taskAdd;