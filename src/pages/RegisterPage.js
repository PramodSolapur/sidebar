import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import { useState } from "react";

const RegisterPage = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const navigate = useNavigate();

  const cancelLogin = () => {
    setToggleModal(false);
  };

  const goToLogin = () => {
    setToggleModal(true);
    navigate("/login");
  };

  return (
    <Container>
      <Form>
        <h1>Register</h1>
        <Alert msg="Registered Successfully! ..." />
        <FieldContainer>
          <InputContainer>
            <InputField name="Name" type="text" label="Name" />
          </InputContainer>
          <InputContainer>
            <InputField name="Email" type="email" label="Email" />
          </InputContainer>
          <InputContainer>
            <InputField name="Password" type="password" label="Password" />
          </InputContainer>
          <InputContainer>
            <Button>Register</Button>
          </InputContainer>
          <p>
            Already have an Account? <Link onClick={goToLogin}>login</Link>{" "}
          </p>
        </FieldContainer>
      </Form>
      {toggleModal && <Modal goToLogin={goToLogin} cancelLogin={cancelLogin} />}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 400px;
  height: 450px;
  box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.2), 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  position: relative;
  h1 {
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 2px;
    font-size: 30px;
  }
  p {
    text-align: center;
    a {
      color: #2192ff;
      letter-spacing: 1px;
    }
  }
`;

const FieldContainer = styled.div`
  margin-top: 70px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  padding: 8px 0px;
  background-color: #2192ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
  text-transform: uppercase;
`;

export default RegisterPage;
