import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import RelationVideoItem from "./RelationVideoItem.jsx";
import { Container } from "./index";
import Sceleton from "./Sceleton/Sceleton.jsx";

const RelationVideos = () => {
  const { relatedVideos } = useSelector((state) => state.video);
  return (
    <Container>
      {relatedVideos?.items?.length
        ? relatedVideos?.items?.map((item) => {
            return <RelationVideoItem key={uuidv4()} {...item} />;
          })
        : [...new Array(15)].map((_) => {
            return <Sceleton key={uuidv4()} />;
          })}
    </Container>
  );
};

export default RelationVideos;
