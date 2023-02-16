import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card";
import SkeletonCard from "../Card/SceletonCard";
import Preloader from "../Preloader";
import { CardWrapper, Container } from "./styled";
import {
  fetchVideos,
  localStorageRemover,
} from "../../redux/slices/searchSlice";
import { setHistory } from "../../redux/slices/historySlice";
import { Button } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const { searchValue, list, status } = useSelector((state) => state.search);

  React.useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchVideos(searchValue || "Apple California"));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [searchValue]);

  const onClick = (obj) => {
    dispatch(setHistory(obj));
  };

  return (
    <Container>
      <Preloader />
      <CardWrapper>
        {status === "loading"
          ? [...new Array(12)].map((_) => {
              return <SkeletonCard key={uuidv4()} />;
            })
          : status === "success" &&
            list?.items?.length > 0 &&
            list?.items.map((item) => {
              if (item.id.kind === "youtube#video") {
                return <Card {...item} key={uuidv4()} onClick={onClick} />;
              }
            })}
      </CardWrapper>
      <Button
        className="btn btn-load"
        ghost
        onClick={() => {
          dispatch(fetchVideos(searchValue));
          localStorageRemover();
        }}
      >
        Load more...
      </Button>
    </Container>
  );
};

export default Home;
