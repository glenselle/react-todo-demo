import React from 'react'
import styled from 'styled-components'

import Icon from '@mdi/react'
import { mdiCheckboxBlankOutline, mdiCheckboxMarked, mdiDelete } from '@mdi/js'

const Item = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  ${props => props.strike ? 'text-decoration: line-through;' : ''}
`

const LeftCluster = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

function TodoItem ({ todo, onComplete, onDelete }) {
  return (
    <Item strike={todo.complete}>
      <LeftCluster>
        <Icon
          style={{margin: '0 1rem'}}
          onClick={() => onComplete(todo.id)}
          path={todo.complete ? mdiCheckboxMarked : mdiCheckboxBlankOutline}
          size={1} />
        {todo.desc}
      </LeftCluster>
      <Icon path={mdiDelete} onClick={() => onDelete(todo.id)} size={1} />
    </Item>
  )
}

export default TodoItem