import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#FFF' : 'transparent')};
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;

export default ButtonIcon;
