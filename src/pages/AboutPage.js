import styled from "styled-components";
import reviews from "../data";
import Review from "../components/Review";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar";

const AboutPage = () => {
  const [showReviewIndex, setShowReviewIndex] = useState(0);

  const currentReview = reviews.find(
    (review) => showReviewIndex + 1 === review.id
  );

  const prevReview = () => {
    if (showReviewIndex === 0) {
      setShowReviewIndex(reviews.length - 1);
    } else {
      setShowReviewIndex((prevIndx) => prevIndx - 1);
    }
  };

  const nextReview = () => {
    if (showReviewIndex === reviews.length - 1) {
      setShowReviewIndex(0);
    } else {
      setShowReviewIndex((prevIndx) => prevIndx + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextReview();
    }, 4000);

    return () => clearInterval(timer);
  });

  return (
    <Container>
      <Review
        key={currentReview.id}
        {...currentReview}
        prevReview={prevReview}
        nextReview={nextReview}
      />
      <ProgressBar />
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default AboutPage;
