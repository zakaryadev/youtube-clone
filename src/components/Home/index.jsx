import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";
import SkeletonCard from "../Card/SceletonCard";
import { CardWrapper, Container } from "./styled";
import {
  fetchVideos,
  localStorageRemover,
} from "../../redux/slices/searchSlice";
import { setHistory } from "../../redux/slices/historySlice";
import { Button } from "antd";
import NoData from "../NoData";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchValue, list, status, order, maxResults } = useSelector(
    (state) => state.search
  );

  React.useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchVideos(searchValue || "iron man", order));
    }
    searchValue.length > 0 && navigate(`?result?q=${searchValue}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchValue, order, maxResults]);

  React.useEffect(() => {
    dispatch(fetchVideos(searchValue, order));
  }, [order, maxResults]);

  const onClick = (obj) => {
    dispatch(setHistory(obj));
  };
  if (status === "error") {
    return <NoData />;
  }
  return (
    <Container>
      <Filter />
      <CardWrapper>
        {status === "loading"
          ? [...new Array(12)].map((_) => {
              return <SkeletonCard key={uuidv4()} />;
            })
          : status === "success" &&
            list?.items?.length > 0 &&
            list?.items?.map((item) => {
              return <Card {...item} key={uuidv4()} onClick={onClick} />;
            })}
      </CardWrapper>
      <Button
        className="btn btn-load"
        ghost
        onClick={() => {
          dispatch(fetchVideos(searchValue, order, maxResults));
          localStorageRemover();
        }}>
        Load more...
      </Button>
    </Container>
  );
};

export default Home;
