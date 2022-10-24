let Tasks = []; // this will store all tasks

const tasks_container = document.getElementById("tasks_container");

// this is a class for a task
class Task{
    constructor(title,description,dateToStart){
        this.Title = title;
        this.Description = description;
        this.DateToStart = dateToStart;
    }
}

let task1 = new Task("clean shoes","use brush","10.10.2020");
let task2 = new Task("clea","use brush","10.10.2020");
let task3 = new Task("shoes","use brush","10.10.2020");
Tasks.push(task1);
Tasks.push(task2);
Tasks.push(task3);

showList();
console.log(Tasks);

// Ali 
function showList(){

    let ul = document.createElement("ul");

    for (let i = 0; i < Tasks.length;i++){
        let li = document.createElement("li");
        li.innerHTML = Tasks[i].Title;
        ul.appendChild(li);
        console.log(Tasks[i].Title);
    }
    tasks_container.appendChild(ul);
}
function sortList(){

}
//Olena
function deleteTask(){

}
//Olena
function updateTask(){

}
//Yuliia
function createNewTask(){

}
//Yuliia
function filterDoneUndone(){

}
//Arwa
function filterbyDate(){

}
//Arwa
function hideShowForm(){ // this will show/hide the update/create form

}