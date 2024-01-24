import './style.css';
import projectAdd from './project';
import taskAdd from './task';

const addProject = document.querySelector('#projectAdd');
addProject.addEventListener('click', () => {
    projectAdd();
});

const addTask = document.querySelector('#taskAdd');
addTask.addEventListener('click', () => {
    taskAdd();
});