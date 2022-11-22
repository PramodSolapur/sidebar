import styled from "styled-components";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
const Review = ({ name, job, image, text, prevReview, nextReview }) => {
  return (
    <ReviewContainer>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <Name>{name}</Name>
      <Role>{job}</Role>
      <Text>{text}</Text>
      <ButtonContainer>
        <FaRegArrowAltCircleLeft className="icon" onClick={prevReview} />
        <FaRegArrowAltCircleRight className="icon" onClick={nextReview} />
      </ButtonContainer>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  width: 500px;
  height: 500px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0px 30px;
  box-shadow: -4px -4px 10px rgba(0, 0, 0, 0.2), 4px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: relative;
  user-select: none;
  text-transform: capitalize;
  @media screen and (max-width: 500px) {
    width: 90%;
    margin: auto;
  }
`;

const Image = styled.div`
  margin-top: 50px;
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    display: block;
  }
`;

const Name = styled.h2`
  margin: 15px 0px 7px;
  letter-spacing: 1.5px;
  color: #2192ff;
  font-family: monospace;
  font-size: 25px;
`;
const Role = styled.h4`
  letter-spacing: 1px;
  color: teal;
`;

const Text = styled.p`
  margin: 20px 0px;
  line-height: 25px;
  text-transform: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: 50px;
  padding: 0px 30px;
  .icon {
    font-size: 30px;
    cursor: pointer;
    color: orange;
  }
`;

export default Review;
