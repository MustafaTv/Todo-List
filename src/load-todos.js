// load-todos.js
import { deleteTodo } from './delete-task';
function loadTodos() {
    console.log('loadTodos function is called');
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
        const todos = JSON.parse(savedTodos);
        const box = document.querySelector('.box');

        box.innerHTML = '';

        todos.forEach((todo) => {
            const list = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'completed';
            list.appendChild(checkbox);

            const span = document.createElement('span');
            span.textContent = todo;
            list.appendChild(span);

            const button = document.createElement('button');
            button.classList.add('deleteTask');
            button.textContent = 'Delete';
            list.appendChild(button);

            box.appendChild(list);

            button.addEventListener('click', () => {
                deleteTodo(list);
            });
        });
    }
}

export default loadTodos;
