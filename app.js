const text = document.querySelector('.user-input');
const taskButton = document.querySelector('.button');
const taskList = document.querySelector('.list');
 
function addTask(event){
    event.preventDefault();

    if(text.value.length === 0){
        alert('Please write a Task');
        return;
    }

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
    completeButton.addEventListener('click', function(e){
        const button = e.target;
        button.parentElement.classList.add("completed");
    })

    const trashButton = document.createElement('button');
    trashButton.innerText = 'Delete';
    trashButton.classList.add("trashBtn");
    listDiv.appendChild(trashButton);
    trashButton.addEventListener('click', function(e){
        const button = e.target;
        button.parentElement.remove();
    })

    taskList.appendChild(listDiv);
}

taskButton.addEventListener('click', addTask);



