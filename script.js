// 🍀 const
const todoContainer = document.querySelector('.todo_container');
const inputBox = document.querySelector('.input_box');

const todoInput = document.querySelector('.todo_input');

const todoSubmit = document.querySelector('.todo_submit');
const todoClearAll = document.querySelector('.todo_clear_all');

const todo = document.querySelector('.todo');
const todoUl = document.querySelector('.todo_ul');

const todoDelete = document.querySelector('.todo_delete');
const todoDone = document.querySelector('.todo_done');

// 🍀addeventlistener

// js 4

todoSubmit.addEventListener('click',todolist);

// enter key
todoInput.addEventListener("keypress",function (e) {
    if (e.key ==="Enter") {
        todolist();
       
    }    
});


// 🍀function

// js 4 click submit, create element
function todolist(){

    if (todoInput.value ==="") {
        return;
        
    } else {
        todolist_ig();
    }
}

function todolist_ig(params) {
    let li = document.createElement("li");
    li.className = 'todo_li';
    li.innerText = todoInput.value;
    todoUl.append(li);
    
    let buttonDelete = document.createElement("button");
    buttonDelete.className = "todo_done";
    buttonDelete.innerHTML ="done"
    li.append(buttonDelete);

    let button = document.createElement("button");
    button.className= "todo_delete";
    button.innerHTML="delete";
    li.append(button);

    todoInput.value="";


}


// js 6 , cleck clear all, clear element

todoClearAll.addEventListener("click",clearAll);

function clearAll(params) {
    location.reload();
    
}

// js 8, click 'done' on list, middle line on t he list
// envent bubbling


todoInput, addEventListener("click",clear);
function clear(e) {
    if (e.target.classList.contains("todo_done")) {
        e.target.parentNode.classList.toggle("clear");
        
    
    } 
    else if(e.target.classList.contains("todo_delete")){

        e.target.parentNode.remove();
    }
    else {
     return;
    }
    
}