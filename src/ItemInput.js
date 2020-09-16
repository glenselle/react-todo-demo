import React, { useRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 93%;
  height: 20px;
  line-height: 20px;
  outline: none;
  padding: 20px;
  background: rgb(0, 0, 0, 0);
  color: #000;
  border: 3px solid #000;
  margin-bottom: 2rem;
  font-size: 2rem;
  
  @media (prefers-color-scheme: dark) {
    color: #fff;
    border: 3px solid #fff;
  }
`

function ItemInput ({ onCreate }) {
  const inputRef = useRef()
  const enterFlow = () => {
    onCreate(inputRef.current.value)
    inputRef.current.value = ''
  }
  const onKeyDown = e => (e.key === 'Enter' && e.target.value !== '') ? enterFlow() : null

  return <StyledInput ref={inputRef} onKeyDown={onKeyDown} placeholder="enter a todo" />
}

export default ItemInput