import React, { useState } from 'react'
import styled from 'styled-components'

import TodoItem from './TodoItem'
import ItemInput from './ItemInput'

// taken from https://gist.github.com/gordonbrander/2230317
const uuid = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9)
}

const ListWrapper = styled.div`
  width: 50%;
  max-width: 500px;
`

function TodoList() {
  const [todos, setTodo] = useState([])
  const onComplete = completedId => setTodo(todos.map(t => t.id === completedId ? { ...t, complete: !t.complete} : t))
  const onDelete = deletedId => setTodo(todos.filter(t => t.id !== deletedId))

  return (
    <ListWrapper>
      <ItemInput onCreate={t => setTodo([...todos, {id: uuid(), desc: t, complete: false}])} />
      <div>
        {todos.map((t, i) => <TodoItem key={t.id} todo={t} onComplete={onComplete} onDelete={onDelete} />)}
      </div>
    </ListWrapper>
  )
}

export default TodoList