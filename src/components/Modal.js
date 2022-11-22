import styled from "styled-components";

const Modal = ({ cancelLogin, goToLogin }) => {
  return (
    <Container>
      <ModalContainer>
        <p>Do you want to Go to Login Page?</p>
        <ButtonContainer>
          <Button onClick={goToLogin}>Confirm</Button>
          <Button className="cancel" onClick={cancelLogin}>
            Cancel
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  width: 400px;
  height: 150px;
  padding: 30px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  padding: 7px 14px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 5px;
  letter-spacing: 1px;
  font-size: 15px;
  &.cancel {
    background-color: red;
    color: white;
    border: none;
  }
`;

export default Modal;
