import { useEffect, useState } from "react";
import styled from "styled-components";
const ProgressBar = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCompleted(Math.floor(Math.random() * 100 + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <ProgressBarCon completed={completed}>{completed}%</ProgressBarCon>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 30px;
  border: 1px solid #2192ff;
  border-radius: 15px;
  margin-bottom: 30px;
  margin: auto;
`;
const ProgressBarCon = styled.div`
  width: ${(props) => `${props.completed}%`};
  text-align: right;
  height: 100%;
  background-color: #2192ff;
  border-radius: inherit;
  color: white;
  transition: width 0.5s linear;
`;

export default ProgressBar;
