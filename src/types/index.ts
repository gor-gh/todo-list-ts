export interface TodoItem {
    id: symbol;
    title: string;
    completed: boolean;
}

export interface StoreState {
    todos: TodoItem[] | [];
}