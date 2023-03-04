import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";
import RelationVideos from "../RelationVideos/index.jsx";
import {
  fetchChannelInfo,
  fetchRelationVideo,
  fetchVideo,
  fetchVideoComments,
} from "../../redux/slices/videoSlice.js";
import { Container, Toggler, Video } from "./styled.js";
import { UilEye, UilThumbsUp } from "@iconscout/react-unicons";
import { Tooltip } from "antd";
import moment from "moment";
import Comments from "./Comments";

const VideoDetails = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const videoId = location.search.slice(3);

  const { video, comments, channelInfo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { snippet, statistics } = video;

  React.useEffect(() => {
    if (window.location.search) {
      dispatch(fetchVideo(videoId));
      dispatch(fetchRelationVideo(videoId));

      dispatch(fetchVideoComments(videoId));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  React.useEffect(() => {
    if (snippet) {
      dispatch(fetchChannelInfo(snippet?.channelId));
    }
  }, [snippet]);

  const TextWithLinks = ({ text }) => {
    const [linkedText, setLinkedText] = React.useState(text);
    React.useEffect(() => {
      const hashtagRegex = /(#\w+)/g;
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const makeLinks = (text) => {
        return text
          .replace(hashtagRegex, '<a href="$1" target="_blank">$1</a>')
          .replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
      };

      setLinkedText(makeLinks(text));
    }, [text]);

    return (
      <span
        dangerouslySetInnerHTML={{
          __html: linkedText,
        }}
      />
    );
  };

  return (
    <Container>
      <Video>
        <VideoPlayer id={videoId ? videoId : videoID} />
        <Video.Title>{snippet?.title}</Video.Title>
        <Video.Info>
          <Video.View>
            <img
              src={channelInfo?.snippet?.thumbnails?.default?.url}
              alt="channelLogo"
            />
            <Tooltip title={snippet?.channelTitle}>
              <Video.ChannelTitle>{snippet?.channelTitle}</Video.ChannelTitle>
            </Tooltip>
          </Video.View>
          <Video.Statistics>
            <Video.View>
              <UilThumbsUp />
              {statistics?.likeCount}
            </Video.View>
            <Video.View>
              <UilEye />
              {statistics?.viewCount}
            </Video.View>
          </Video.Statistics>
        </Video.Info>
        <Video.Desc
          style={{
            overflow: show ? "none" : "hidden",
            height: show ? "fit-content" : "100px",
          }}>
          {snippet?.description && (
            <React.Fragment>
              <p style={{ fontWeight: "400", color: "gray" }}>
                {moment(snippet?.publishedAt).fromNow()}
              </p>
              <TextWithLinks text={snippet?.description} />
            </React.Fragment>
          )}
        </Video.Desc>
        <Toggler onClick={() => setShow(!show)}>
          {show ? "Hide..." : "Show..."}
        </Toggler>
        <Comments />
      </Video>
      <RelationVideos />
    </Container>
  );
};

export default VideoDetails;
