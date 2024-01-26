function removeTask() {
    const taskList = document.querySelector('#taskList');

    taskList.addEventListener('click', (event) => {
        const target = event.target;
        const deleteButton = target.classList.contains('deleteTask') ? target : target.closest('.deleteTask');
    
        if (deleteButton) {
            deleteTask(deleteButton.closest('.taskContainer'));
        }
    });
    
    function deleteTask(taskContainer) {
        taskContainer.remove();
    }
}

export default removeTask;