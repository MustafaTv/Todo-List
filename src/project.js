import Trash from './trash.svg';

function projectAdd() {
    const addProject = document.querySelector('#projectAdd');
    addProject.addEventListener('click', () => {
        const projects = document.querySelector('.projects');
        const newListProject = document.createElement('li');
        const newProject = document.createElement('a');
        newProject.href = '#';
        newProject.id = 'todo';
        newProject.textContent = 'Example 2';
        newListProject.appendChild(newProject);
        const deleteTask = document.createElement('button');
        deleteTask.classList.add('deleteProject');
        const trash = new Image();
        trash.src = Trash;
        deleteTask.appendChild(trash);
        newListProject.appendChild(deleteTask);
        projects.appendChild(newListProject);

        return projects;

    })
};

export default projectAdd;