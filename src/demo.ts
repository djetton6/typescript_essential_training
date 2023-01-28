
// you need an equal sign for enum values
enum Status {
    Todo =  "todo",
    InProgress = "in-progress",
    Done = "done",
}
//must declare an enum value like this: status: Status.Done,
interface Todo {
    id: number,
    title: string,
    status: Status,
    completedOn?: Date,
};


const todoItems:Array<Todo> = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.InProgress },
    { id: 3, title: "Write the best app in the world", status: Status.Todo },
]

function addTodoItem(todo:string): Todo {
    const id = getNextId(todoItems)

    const newTodo:Todo = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

//Generic Function declaration

// function getNextId<T extends { id: number}> (items : []): number {
//     return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
// }

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))