let todos;
const savedTodos=JSON.parse(localStorage.getItem("todos")); 

if(Array.isArray(savedTodos)){
    todos=savedTodos;
} else{
        todos=[{
        title:"Item1",
        dueDate: "2022-10-09",
        id:"id1"
    }, {
        title:"Item2" ,
        dueDate: "2022-10-09",
        id:"id2"
    }, { 
        title:"Item3",
        dueDate: "2022-10-09",
        id:"id3"
    }];
}
render();

function createTodo(content, dueDate){
    const id=' ' + new Date().getTime();
    todos.push({
        title:content,
        dueDate: dueDate,
        id: id
    });
    saveTodos();
}

function AddTodo(){
    const todo=document.getElementById("todo-input");
    const content=todo.value;
    const datePicker=document.getElementById("due-date");
    const dueDate=datePicker.value;
    createTodo(content,dueDate);    
    render();
}

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}
    
function removeTodo(toDel){
    todos=todos.filter(function(todos){
        if(todos.id===toDel){
            return false;
        }
        else{
            return true;
        }
    });
    saveTodos();
}

function delTodo(deleteTodo){
    const deleteButton=deleteTodo.target;
    const toDel=deleteButton.id;
    removeTodo(toDel);
    render();
}

function render(){
    document.getElementById("todoAdd").innerHTML='';
    todos.forEach(function(todo){
        const ele=document.createElement("div");
        ele.innerText=todo.title + " " + todo.dueDate;
        const del=document.createElement("button");
        del.classList.add("delete");
        del.innerText="X";
        del.onclick=delTodo;
        del.id=todo.id;
        ele.appendChild(del);
        const todoList=document.getElementById("todoAdd");
        todoList.appendChild(ele);
    });
}
