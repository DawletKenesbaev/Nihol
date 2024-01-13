import styled from "styled-components"

export const DropdownItem = styled.div`
  display:flex;
  grid-gap: 13px;
  color: ${({danger})=> (danger ? 'red' : 'black')};
`