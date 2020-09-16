import React from 'react'
import styled from 'styled-components'

import './App.css'
import TodoList from './TodoList'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
  font-weight: 600;
`

const Header = styled.h3`
  font-family: 'Monoton', cursive;
  font-size: 6rem;
  font-weight: 100;
  margin: 4rem;
`

function App() {
  return (
    <AppWrapper className="App">
      <Header>Todos</Header>
      <TodoList />
    </AppWrapper>
  )
}

export default App;
