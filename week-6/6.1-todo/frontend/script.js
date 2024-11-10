const API_URL = 'http://localhost:3001/todos';

// Fetch existing todos when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    const todos = await fetchTodos();
    todos.forEach(addTodoToDOM);
});

// Fetch todos from the backend
async function fetchTodos() {
    const response = await fetch(API_URL);
    const todos = await response.json();
    return todos;
}

// Add a new todo to the DOM
function addTodoToDOM(todo) {
    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${todo.description}</span>
        <button onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
}

// Add a new todo
document.getElementById('add-todo-btn').addEventListener('click', async () => {
    const description = document.getElementById('todo-input').value;
    if (!description.trim()) {
        alert('Please enter a todo description');
        return;
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description })
    });
    const newTodo = await response.json();
    addTodoToDOM(newTodo);
    document.getElementById('todo-input').value = ''; // Clear input
});

// Delete a todo
async function deleteTodo(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload(); // Refresh the list after deletion
}

// Search for todos
document.getElementById('search-todo-btn').addEventListener('click', async () => {
    const searchTerm = document.getElementById('search-input').value;
    const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(searchTerm)}`);
    const todos = await response.json();

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear existing list
    todos.forEach(addTodoToDOM); // Display filtered todos
});
