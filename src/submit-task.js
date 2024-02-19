// submit-task.js
import { updateLocalStorage } from './delete-task';
import { deleteTodo } from './delete-task';
function addTask() {
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        const box = document.querySelector('.box');
        const taskName = document.querySelector('.taskName');

        const list = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'completed';
        list.appendChild(checkbox);

        const span = document.createElement('span');
        const task = taskName.value;
        span.textContent = task;
        list.appendChild(span);

        const button = document.createElement('button');
        button.classList.add('deleteTask');
        button.textContent = 'Delete';
        list.appendChild(button);

        box.appendChild(list);

        taskName.value = '';

        button.addEventListener('click', () => {
            deleteTodo(list);
            updateLocalStorage();
        });

        updateLocalStorage();
    });
}

export default addTask;
