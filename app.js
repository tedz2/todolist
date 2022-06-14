const text = document.querySelector('.user-input');
const taskButton = document.querySelector('.button');
const taskList = document.querySelector('.list');
 
function addTask(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add("toDoDiv");

    const newTask = document.createElement('li');
    newTask.innerText = text.value;
    newTask.classList.add("toDoTask");

    listDiv.appendChild(newTask);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Completed';
    completeButton.classList.add("completeBtn");
    listDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerText = 'Delete';
    trashButton.classList.add("trashBtn");
    listDiv.appendChild(trashButton);

    taskList.appendChild(listDiv);
}

function toTask(e){
    const click = e.target;
    if(click.classList[0] === "trashBtn"){
    const todo = click.parentElement;
    todo.remove();
}

    if(click.classList[0] === "completeBtn"){
        const togo = click.parentElement;
        togo.classList.add("completed");
    }
}




taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', toTask);


