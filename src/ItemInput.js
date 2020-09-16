import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 93%;
  height: 20px;
  line-height: 20px;
  outline: none;
  padding: 20px;
  background: rgb(0, 0, 0, 0);
  color: white;
  border: 3px solid white;
  margin-bottom: 2rem;
  font-size: 2rem;
`

function ItemInput ({ onCreate }) {
  const inputRef = useRef()
  const enterFlow = () => {
    onCreate(inputRef.current.value)
    inputRef.current.value = ''
  }
  const onKeyDown = e => e.key === 'Enter' ? enterFlow() : null

  return <StyledInput ref={inputRef} onKeyDown={onKeyDown} placeholder="enter a todo" />
}

export default ItemInput