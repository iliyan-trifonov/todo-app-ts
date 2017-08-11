import TODO from './todo';

export default class TODOS {
    private todos: TODO[];
    private listElem: HTMLUListElement;

    public constructor(todos: TODO[], listElem: HTMLUListElement) {
        this.todos = todos;
        this.listElem = listElem;
    }

    private generateLi = (todo: TODO): string =>
        `<li>${todo.getText()}</li>`;

    public render = (): void => {
        this.listElem.innerHTML =
            this.todos
                .map((todo: TODO): string => {
                    return this.generateLi(todo);
                })
                .join('');
    }

    public addTodo = (todo: TODO): void => {
        this.todos.push(todo);
    }

}