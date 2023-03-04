import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, PublishTime } from "./styled";
import { useSelector } from "react-redux";
import CommentItem from "./CommentItem";
const Comments = () => {
  const { comments } = useSelector((state) => state.video);

  return (
    <Container>
      <PublishTime>
        Total results: {comments && comments.pageInfo?.totalResults}
      </PublishTime>
      {comments?.items &&
        comments.items.map((item) => {
          return <CommentItem {...item} key={uuidv4()} />;
        })}
    </Container>
  );
};

export default Comments;

// [
//   {
//     kind: "youtube#commentThread",
//     etag: "PYfyqTM8XkY84lf1UOrdJpL9Lts",
//     id: "Ugw5cvceVbnTQc_mr9x4AaABAg",
//     snippet: {
//       videoId: "FzcfZyEhOoI",
//       topLevelComment: {
//         kind: "youtube#comment",
//         etag: "BgySYVlR4SD_UXE9ZMZ4ZiVypms",
//         id: "Ugw5cvceVbnTQc_mr9x4AaABAg",
//         snippet: {
//           videoId: "FzcfZyEhOoI",
//           textDisplay: "i hate apple products",
//           textOriginal: "i hate apple products",
//           authorDisplayName: "badass rap",
//           authorProfileImageUrl:
//             "https://yt3.ggpht.com/ytc/AL5GRJWvl2FUbGijLva4Ssj2AGrdK1Oelczq_E0EuXbRMQ=s48-c-k-c0x00ffffff-no-rj",
//           authorChannelUrl:
//             "http://www.youtube.com/channel/UCw9khDnZFfJxJNE7X_GcK5Q",
//           authorChannelId: {
//             value: "UCw9khDnZFfJxJNE7X_GcK5Q",
//           },
//           canRate: true,
//           viewerRating: "none",
//           likeCount: 0,
//           publishedAt: "2023-02-21T20:54:15Z",
//           updatedAt: "2023-02-21T20:54:15Z",
//         },
//       },
//       canReply: true,
//       totalReplyCount: 0,
//       isPublic: true,
//     },
//   },
// ];
