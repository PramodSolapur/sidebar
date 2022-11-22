import styled from "styled-components";

const Buttons = ({ totalPages, setCurrentPage, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      {pageNumbers.map((num) => (
        <Button
          onClick={() => setCurrentPage(num)}
          key={num}
          className={num === currentPage ? "activeBtn" : ""}
        >
          {num}
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  border: 2px solid #2192ff;
  &.activeBtn {
    background-color: #2192ff;
    color: white;
  }
`;

export default Buttons;
