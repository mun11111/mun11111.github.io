const toDoForm = document.getElementById ("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById ("todo-list");
const TODOS_KEY = "todos";

let toDos =[];

function saveToDos(){

    localStorage.setItem("todos", JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter ((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
  
function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id =newTodo.id;
    // li.appendChild(span);
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
   }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}


toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}

