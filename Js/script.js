const taskInputName = document.querySelector('#name');
const taskInputDesc = document.querySelector('#description')
const taskButton = document.querySelector('#createButton')
const taskList = document.querySelector('#list')
const taskQuantity = document.querySelector('#quantity')

taskButton.addEventListener('click', createTask)
taskList.addEventListener('click', deleteTask)


function createTask(event) {
    const taskDiv = document.createElement('div')
    taskDiv.classList.add('task')

    const taskLi = document.createElement('h4')
    taskLi.classList.add('tasks-list')
    taskLi.innerText = taskInputName.value 
    taskInputName.value = ''

    taskDiv.appendChild(taskLi)

    const taskDelete = document.createElement('button')
    taskDelete.innerHTML = 'x'
    taskDelete.classList.add('deleteButton')

    taskDiv.appendChild(taskDelete)
    taskList.appendChild(taskDiv)
}

function deleteTask(e) {

    if (e.target.classList.contains('deleteButton')) {
        e.target.parentElement.remove()
    }

    var cont = 0;
    deleteButton.addEventListener('click', deleteTask());{
    cont++
    taskQuantity.innerHTML = cont.valueOf(Number)
}}

const ChuckPhrase = window.setInterval(function(){
    fetch(`https://api.chucknorris.io/jokes/random`).then(apiChuck=>{
    return apiChuck.json()
}).then(content=>{
    document.getElementById("api").innerHTML = `"${content.value}"`;
})
}, 5000);