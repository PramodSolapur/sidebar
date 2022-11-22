import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Container>
      <h1>Oops! Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 50px;
  h1 {
    font-size: 60px;
    color: #e14d2a;
  }
  a {
    padding: 7px 15px;
    margin-top: 30px;
    border-radius: 5px;
    background-color: #ff6464;
    color: white;
    letter-spacing: 1px;
  }
`;

export default ErrorPage;
