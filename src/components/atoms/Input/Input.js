import styled from 'styled-components';

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
`;

export default Input;
