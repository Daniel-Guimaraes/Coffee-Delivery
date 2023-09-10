import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 9px 8px;
  background-color: ${(props) => props.theme['gray-500']};
  border-radius: 6px;
  margin-right: 8px;

  > button {
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;
    color: ${(props) => props.theme['purple-200']};
    cursor: pointer;
  }
`
