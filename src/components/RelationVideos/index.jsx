import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import RelationVideoItem from "./RelationVideoItem.jsx";
import { Container } from "./index";
import Sceleton from "./Sceleton/Sceleton.jsx";
import { setHistory } from "../../redux/slices/historySlice";

const RelationVideos = () => {
  const dispatch = useDispatch();
  const onClick = (obj) => {
    dispatch(setHistory(obj));
  };
  const { relatedVideos } = useSelector((state) => state.video);
  return (
    <Container>
      {relatedVideos?.items?.length
        ? relatedVideos?.items?.map((item) => {
            return (
              <RelationVideoItem onClick={onClick} key={uuidv4()} {...item} />
            );
          })
        : [...new Array(15)].map((_) => {
            return <Sceleton key={uuidv4()} />;
          })}
    </Container>
  );
};

export default RelationVideos;
