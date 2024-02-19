// delete-task.js
function deleteTodo(box) {
    box.remove();
    updateLocalStorage();
}

function updateLocalStorage() {
    console.log('i am working');
    const tasks = document.querySelectorAll('.box li');
    const todos = [];

    tasks.forEach((task) => {
        const taskText = task.querySelector('span').textContent;
        todos.push(taskText);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

export { deleteTodo, updateLocalStorage };
