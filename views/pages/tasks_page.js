import {App} from "../app.js"

let tasksArr = []

export function tasksPage(){
    let myTemp = `
    <section class="d-flex flex-column align-items-center uD0-gap-24 p-5">
        <input onkeypress="keyEnter(event)" placeholder="Create Task" class="D0-createTask uD0-dash-br cD0-light-gray-border uD0-radius-5 w-75 m-auto cD0-gray fD0-arial fD0-size-35">
    `
    for(let [index, task] of tasksArr.entries()){
        myTemp +=   `
                    <div class="overflow-hidden d-flex align-items-center D0-createTask cD0-dsh-black w-75 m-auto cD0-bg-white-gray uD0-radius-5 uD0-solid-br cD0-dark-gray-border position-relative">
                        <input type="checkbox" class="uD0-size-32">
                        <input ondblclick="editTaskTitle(event)" onblur="updateTasks(event, ${index})" readonly class="cD0-gray fD0-arial fD0-size-35 border-0 cD0-bg-white-gray" type="text" value="${task.title}">
                    
                        <div id="${task.id+index}" class="d-flex D0-tool-bar position-absolute">
                            <div onclick="toggleToolBar(${task.id+index}, ${index})" class="uD0-click D0-b-more d-flex align-items-center justify-content-center cD0-bg-dark-gray">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-more"></i>
                            </div>

                            <div class="D0-tools cD0-bg-dark-gray">
                            </div>

                            <div class="D0-tools cD0-bg-dark-gray d-flex align-items-center justify-content-center">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-clock"></i>
                            </div>

                            <div class="D0-tools cD0-bg-dark-gray d-flex align-items-center justify-content-center">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-pin"></i>
                            </div>

                            <div class="D0-tools cD0-bg-dark-gray d-flex align-items-center justify-content-center">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-print"></i>
                            </div>

                            <div class="D0-tools cD0-bg-dark-gray d-flex align-items-center justify-content-center">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-categories"></i>
                            </div>

                            <div onclick="deleteTask(event, ${index})" class="uD0-click D0-tools cD0-bg-dark-gray d-flex align-items-center justify-content-center">
                            <i class="uD0-cover uD0-size-32 d-inline-block iD0-delete"></i>
                            </div>
                        </div>
                    </div>
                    `
    }
    
    myTemp +=   `
                </section>

                `
    return myTemp
}

// window.fn --> to let window read this function
window.createTask =  function createTask(event){
    let task = {
        id: "_id",
        title: event.target.value,
        state: false
    }
    tasksArr.unshift(task)
    localStorage.setItem("tasks", JSON.stringify(tasksArr))
    App() 
}

function setTasks(){
    let tasks = JSON.parse(localStorage.getItem("tasks"))
    tasks ? tasksArr = tasks : false;
}

setTasks()

window.toggleToolBar = function toggleBar(elemId, index){
    if (tasksArr[index].state){
        elemId.style.right = "-721px";
        tasksArr[index].state = false;
    } else {

        elemId.style.right = "0px";
        tasksArr[index].state = true;
    }
}


window.editTaskTitle = function editTaskTitle(event){
    event.target.removeAttribute("readonly")
}

window.updateTasks = function updateTasks(event, index){

    let task = {
        id: "_id",
        title: event.target.value,
        state: false
    }

    tasksArr[index] = task
    localStorage.setItem("tasks", JSON.stringify(tasksArr))
    event.target.setAttribute("readonly", "readonly")
}

window.deleteTask = function deleteTask(event, index){
    tasksArr.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasksArr))
    App()
}

window.keyEnter = function keyEnter(event){
    event.keyCode === 13 ? createTask(event) : false;
}