function removeProject() {
    const projectList = document.querySelector('.projects');

    projectList.addEventListener('click', (event) => {
        const target = event.target;
        const deleteButton = target.classList.contains('deleteProject') ? target : target.closest('.deleteProject');
    
        if (deleteButton) {
            deleteProject(deleteButton.closest('li'));
        }
    });
    
    function deleteProject(projectItem) {
        projectItem.remove();
    }
}

export default removeProject;
