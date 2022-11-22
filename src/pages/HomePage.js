import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";

const HomePage = () => {
  return (
    <Container>
      <h2>
        Welcome <span>Pramod</span>{" "}
      </h2>
      <h1>
        You are a{" "}
        <span>
          <Typewriter
            // words={["MERN Stack", "Front-End", "Back-End"]}
            words={["Fornt-End"]}
            loop={0}
            typeSpeed={100}
          />
        </span>{" "}
        Developer
      </h1>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    121deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(38, 181, 219, 1) 0%,
    rgba(45, 60, 253, 1) 100%
  );
  h2 {
    font-size: 40px;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 2.5px;
    margin-bottom: 30px;
  }
  h1 {
    font-size: 55px;
    letter-spacing: 3px;
  }
  span {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    h1 {
      font-size: 24px;
      letter-spacing: 1px;
      padding: 0px 10px;
    }
  }
`;

export default HomePage;
