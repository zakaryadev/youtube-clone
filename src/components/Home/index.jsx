import React from "react";
import Card from "../Card";
import { CardWrapper, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../redux/slices/searchSlice";
import SkeletonCard from "../Card/SceletonCard";
import Preloader from "../Preloader";
const Home = () => {
  const dispatch = useDispatch();
  const { searchValue, list, status } = useSelector((state) => state.search);

  React.useEffect(() => {
    dispatch(fetchVideos(searchValue || "Iron man"));
  }, [searchValue]);

  return (
    <Container>
      <Preloader />
      <CardWrapper>
        {status === "loading"
          ? [...new Array(12)].map((_, indx) => {
              return <SkeletonCard key={indx} />;
            })
          : status === "success" &&
            list?.items?.length > 0 &&
            list?.items.map((item, index) => {
              if (item.id.kind === "youtube#video") {
                return <Card {...item} key={index} />;
              }
            })}
      </CardWrapper>
    </Container>
  );
};

export default Home;
