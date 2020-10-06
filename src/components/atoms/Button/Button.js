import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      padding: 10px 30px;
      background-color: ${({ theme }) => theme.grey200};
      font-size: 10px;
    `}
`;

export default Button;
