import TODO from './todo';
import TODOS from './todos';

const listElem:HTMLUListElement = <HTMLUListElement>document.getElementById('todos');
const todoInput:HTMLInputElement = <HTMLInputElement>document.getElementById('todo-text');
const todoBtn:HTMLButtonElement = <HTMLButtonElement>document.getElementById('todo-add-btn');
const todos:TODOS = new TODOS([], listElem);

function addTodo() {
    todos.addTodo(new TODO(todoInput.value));
    todoInput.value = '';
    todos.render();
}

todoBtn.onclick = addTodo;