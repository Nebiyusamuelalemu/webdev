const input_txt = document.getElementById("task");
const addbutton = document.getElementById('add');
const deletebutton = document.getElementById(`delete`);
const tasklist = document.getElementById("tasklist");
const taskamount = document.getElementById("task_amount");
let task_amount = 0;
taskamount.textContent = `Task amount: ${task_amount}`; 

function add_task(){
    let input_task = input_txt.value;
    if(input_task.trim() != ""){
        let task_container = document.createElement('div');
        task_container.id="tasks";
        let new_task = document.createElement('input');
        new_task.id="task_ls";
        new_task.type = "checkbox";
        task_container.appendChild(new_task)
        tasklist.appendChild(task_container);

        let new_lbl = document.createElement('label');
        new_lbl.for = "task_ls";
        new_lbl.id="tasks";
        new_lbl.textContent = input_task;
        task_container.appendChild(new_lbl)
        tasklist.appendChild(task_container);

        task_amount++;
        taskamount.textContent = `Task amount: ${task_amount}`; 
    }
}



function delete_task(){
    tasklist.removeChild(tasklist.lastChild);
    if(task_amount > 0){
        task_amount--;
    }
    taskamount.textContent = `Task amount: ${task_amount}`; 
}

addbutton.onclick = add_task;
deletebutton.onclick = delete_task;