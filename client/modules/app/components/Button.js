import styled from 'styled-components'

export const Button = styled.div`
  display: inline-block;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => (theme === 'primary' ? '#0078ef' : 'red')};
  color: #fff;
  user-select: none;
  cursor: pointer;
`

export default Button
