import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  height: 47px;
  width: 220px;
  border: none;
  border-radius: 50px;
  background-color: ${({ color }) => color || 'hsl(49, 100%, 58%)'};
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      height: 30px;
      width: 105px;
      background-color: #e6e6e6;
      font-size: 10px;
    `}
`;

export default Button;
