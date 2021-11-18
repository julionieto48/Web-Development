import React from 'react'

export function TodoList({todos}) {
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />))
                }
            </ul>
        </div>
    )
}
