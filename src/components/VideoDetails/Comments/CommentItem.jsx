import moment from "moment";
import React from "react";
import { UilThumbsUp } from "@iconscout/react-unicons";
import { Comment, Content, Img } from "./styled";

const CommentItem = ({ snippet }) => {
  const {
    topLevelComment: {
      snippet: {
        textOriginal,
        authorDisplayName,
        authorProfileImageUrl,
        likeCount,
        publishedAt,
      },
    },
  } = snippet;
  return (
    <Comment>
      <Img src={authorProfileImageUrl} />
      <Content>
        <Content.Header>
          <Content.Name>{authorDisplayName}</Content.Name>
          <Content.Time>
            {moment(publishedAt).fromNow()}, {moment(publishedAt).format("LT")}
          </Content.Time>
        </Content.Header>
        <Content.Text>{textOriginal}</Content.Text>
      </Content>
    </Comment>
  );
};

export default CommentItem;
