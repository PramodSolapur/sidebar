import styled from "styled-components";

const Alert = ({ msg }) => {
  return <AlertContainer>{msg}</AlertContainer>;
};

const AlertContainer = styled.div`
  position: absolute;
  top: 80px;
  width: 90%;
  padding: 4px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 40px;
  background-color: #b3ffae;
  color: black;
`;

export default Alert;
