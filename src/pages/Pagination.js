import { useEffect, useState } from "react";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Pagination = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      const data = await response.json();
      setCoinsData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
  });

  const handleInfiniteScroll = () => {
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(Math.round(coinsData.length / postsPerPage));

  if (isLoading) {
    return <Loading size="large" />;
  }

  return (
    <OuterCon>
      <Container>
        {currentPosts.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            name={data.name}
            symbol={data.symbol}
            current_price={data.current_price}
          />
        ))}
      </Container>
      <Buttons
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </OuterCon>
  );
};

const OuterCon = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media screen and (max-width: 500px) {
    grid-template-columns: auto;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Pagination;
