// index.js
import './style.css';
import addTask from './submit-task';
import { deleteTodo, updateLocalStorage } from './delete-task';
import loadTodos from './load-todos';

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('click', (event) => {
        const deleteBtn = event.target.closest('.deleteTask');
        if (deleteBtn) {
            const listItem = deleteBtn.closest('li');
            deleteTodo(listItem);
        }
    });

    updateLocalStorage();
    addTask();
    loadTodos();
});

