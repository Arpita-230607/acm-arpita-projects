let todoList = JSON.parse(localStorage.getItem('todoList'));

if (!todoList) {
  todoList = [
    { name: 'Learn JavaScript', dueDate: '2026-10-01' },
    { name: 'Complete DOM project', dueDate: '2026-10-05' }
  ];
}

const taskNameInput = document.querySelector('#js-task-name-input');
const dueDateInput = document.querySelector('#js-due-date-input');
const addButton = document.querySelector('#js-add-button');
const todoListContainer = document.querySelector('#js-todo-list-container');

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div class="todo-item">
        <div class="todo-info">
          <span class="todo-name">${name}</span>
          <span class="todo-date">${dueDate}</span>
        </div>
        <button class="js-delete-todo-button" data-index="${index}">Delete</button>
      </div>
    `;

    todoListHTML += html;
  });

  todoListContainer.innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton) => {
    deleteButton.addEventListener('click', () => {
      const index = deleteButton.dataset.index;
      todoList.splice(index, 1);
      localStorage.setItem('todoList', JSON.stringify(todoList));
      renderTodoList();
    });
  });
}

addButton.addEventListener('click', () => {
  const name = taskNameInput.value;
  const dueDate = dueDateInput.value;

  if (name === '') {
    return;
  }

  todoList.push({ name, dueDate });

  taskNameInput.value = '';
  dueDateInput.value = '';

  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderTodoList();
});

renderTodoList();
