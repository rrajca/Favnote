import styled, { css } from 'styled-components';
import magnifyingIcon from 'assets/magnifying_glass.svg';

const Input = styled.input`
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.grey100};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ::placeholder {
    text-transform: uppercase;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${magnifyingIcon});
      background-size: 15px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
