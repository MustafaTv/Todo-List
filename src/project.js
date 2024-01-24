function projectAdd() {
    const projects = document.querySelector('.projects');
    const newListProject = document.createElement('li');
    const newProject = document.createElement('a');
    newProject.href = '#';
    newProject.id = 'todo';
    newProject.textContent = 'example through JS';
    newListProject.appendChild(newProject);
    projects.appendChild(newListProject);

    return projects;

}

export default projectAdd;