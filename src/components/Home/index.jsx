import React from "react";
import Card from "../Card";
import { CardWrapper, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchVideos } from "../../redux/slices/searchSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.search);

  React.useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  
  return (
    <Container>
      <CardWrapper>
        {status === "loading" ? (
          <h1>Loading...</h1>
        ) : (
          status === "success" &&
          list.items.map((item, index) => {
            if (item.id.kind === "youtube#video") {
              return <Card {...item} key={index} />;
            }
          })
        )}
      </CardWrapper>
    </Container>
  );
};

export default Home;
