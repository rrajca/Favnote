import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border: none;
  border-radius: 20px;
  background-color: transparent;
  background-image: url(${({ icon }) => icon});
  background-size: 40%;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  &&.active {
    background-color: #fff;
  }
`;

export default ButtonIcon;
