 
      let todos;

      const savedTodos = JSON.parse(localStorage.getItem('todos'));
  
      if (Array.isArray(savedTodos)) {
        todos = savedTodos;
      } else {
        todos = [{
          title: 'Get groceries',
          dueDate: '2021-10-04',
          id: 'id1'
        }, {
          title: 'Wash car',
          dueDate: '2021-02-03',
          id: 'id2'
        }, {
          title: 'Make dinner',
          dueDate: '2021-03-04',
          id: 'id3'
        }];
      }
      const createTodo = (title, dueDate) => {
        const id = '' + new Date().getTime();

        todos.push({
          title: title,
          dueDate: dueDate,
          id: id
        });

        saveTodos();
      }
      const removeTodo = idToDelete => {
        todos = todos.filter(todo => {
          if (todo.id === idToDelete) {
            return false;
          } else {
            return true;
          }
        });

        saveTodos();
      }

      const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
      }

      // Controller
      const addTodo = () => {
        const textbox = document.getElementById('todo-title');
        const title = textbox.value;

        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;

        createTodo(title, dueDate);
        render();
      }

      const deleteTodo = event => {
        const deleteButton = event.target;
        const idToDelete = deleteButton.id;

        removeTodo(idToDelete);
        render();
      }

      const render = () => {
        document.getElementById('todo-list').innerHTML = '';

        todos.forEach(todo => {
          const element = document.createElement('div');
          element.innerText = todo.title + ' ' + todo.dueDate;

          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.style = 'margin-left: 12px';
          deleteButton.onclick = deleteTodo;
          deleteButton.id = todo.id;
          element.appendChild(deleteButton);

          const todoList = document.getElementById('todo-list');
          todoList.appendChild(element);
        });
      }

      render();