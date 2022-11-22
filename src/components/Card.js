import styled from "styled-components";

const Card = ({ image, name, symbol, current_price }) => {
  return (
    <CardCon>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <p>
        Name : <span>{name}</span>{" "}
      </p>
      <p>
        Symbol : <span>{symbol}</span>{" "}
      </p>
      <p>
        Current Price : <span>{current_price}</span>{" "}
      </p>
    </CardCon>
  );
};

const CardCon = styled.div`
  height: 300px;
  max-height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2px -2px 3px rgba(0, 0, 0, 0.1), 2px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  span {
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Card;
