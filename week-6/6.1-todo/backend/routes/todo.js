let todos = []; // in memory space

export async function getAllTodo (req, res, next){
    res.send(todos);
}

export async function createTodo (req, res, next){
    const description = req.body.description;

  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).send('Description is required and should be a non-empty string');
  }
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    description: description.trim(),
  };
  todos.push(newTodo);
  res.status(201).send(newTodo);
}

export async function updateTodo (req, res, next){
    const description = req.body.description;
  if (typeof description !== 'string' || description.trim() === '') {
    return res.status(400).send('Description is required and should be a non-empty string');
  }

  const todoId = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).send('Todo not found');
  }

  todos[todoIndex].description = description.trim();
  res.send(todos[todoIndex]);
}


export async function deleteTodoById (req, res, next){

  const todoId = parseInt(req.params.id, 10);
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).send('Todo not found');
  }

  const deletedTodo = todos.splice(todoIndex, 1)[0];
  
  res.send(`Todo with id ${deletedTodo.id} deleted`);
}

// Search for a todo by description
export async function searchTodo(req, res,next){
    const searchTerm = req.query.q;
    if (!searchTerm) {
        return res.status(400).send('Search term is required');
    }

    const filteredTodos = todos.filter(todo =>
        todo.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    res.send(filteredTodos);
};