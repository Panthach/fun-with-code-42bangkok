
document.addEventListener('DOMContentLoaded', (event) => {
    const ftList = document.getElementById('ft_list');
    const newBtn = document.getElementById('newBtn');
  
    const savedTodos = getCookie('todoList');
    if (savedTodos) {
      const todos = JSON.parse(savedTodos).reverse();
      todos.forEach(todo => {
        addTodoToList(todo);
      });
    }
  
    newBtn.addEventListener('click', () => {
      const newTodo = prompt("Enter a new TO DO:");
      if (newTodo) {
        addTodoToList(newTodo);
        saveTodos();
      }
    });
  
    function addTodoToList(todoText) {
      const todoDiv = document.createElement('div');
      todoDiv.className = 'todo-item';
      todoDiv.textContent = todoText;
      todoDiv.addEventListener('click', () => {
        const confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
          todoDiv.remove();
          saveTodos();
        }
      });
      ftList.prepend(todoDiv);
    }
  
    function saveTodos() {
      const todos = [];
      const todoItems = document.querySelectorAll('.todo-item')
      todoItems.forEach(item => {
        todos.push(item.textContent);
      });
      document.cookie = `todoList=${JSON.stringify(todos)}; path=/;`;
    }

    function getCookie(name) {
      console.log(document.cookie)
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return '';
    }


  });
  