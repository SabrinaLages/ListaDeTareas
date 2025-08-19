const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")



//hacemos esto para inicializar y que no quede en null, null nos puede traer problemas
let todoItems = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodoList(){

    //cada vez que llamo a esta funcion se me vacia el todoList
    todoList.innerHTML = "";

    //para que no se repitan las tareas y empieza a crear las listas
    todoItems.forEach((todo, index) => {
        
        const li = document.createElement('li');
        li.textContent = todo;

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "X"
        deleteButton.addEventListener("click" , ()=>{
            todoItems.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todoItems)); //actualizar el localStor
            renderTodoList()
        })

        li.appendChild(deleteButton)
        todoList.appendChild(li)
    });
}


todoForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const todoInput = todoForm.querySelector("#todo-input")
    const todoText = todoInput.value.trim()
    if(todoText.length > 0){
        todoItems.push(todoText);
        localStorage.setItem("todos", JSON.stringify(todoItems)); //actualizar el localStor
        todoInput.value = "" //limpia 
        renderTodoList();
    }
})

renderTodoList() // que de entrada me muestre

