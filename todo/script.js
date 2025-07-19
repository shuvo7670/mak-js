const button   = document.getElementById("todo-button");
const input    = document.getElementById('todo-input');
const todoList = document.getElementById('todo-app-list-ul');
const form     = document.getElementById('todo-form');

// Actions
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue = input.value;
    const newElement = document.createElement('li');
    newElement.innerHTML = `<h4>${inputValue}</h4>
                            <div class="action-button">
                                <button>Edit</button>
                                <button class="delete-button">Delete</button>
                            </div>`;
    todoList.appendChild(newElement);
    input.value = '';
    deleteTodo();
});

function deleteTodo()
{
    const deleteButton = document.querySelectorAll('.delete-button');
    deleteButton.forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.remove();
        });
    });
}