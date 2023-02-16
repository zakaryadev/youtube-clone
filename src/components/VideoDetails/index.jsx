import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";
import RelationVideos from "../RelationVideos/index.jsx";
import {
  fetchRelationVideo,
  fetchVideo,
} from "../../redux/slices/videoSlice.js";
import { Container, Toggler, Video } from "./styled.js";
import { UilEye, UilThumbsUp } from "@iconscout/react-unicons";
import { Tooltip } from "antd";
import moment from "moment";

const VideoDetails = () => {
  const [show, setShow] = React.useState(false);
  const location = useLocation();
  const videoId = location.search.slice(3);

  const { video } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const { snippet, statistics } = video;

  React.useEffect(() => {
    if (window.location.search) {
      dispatch(fetchVideo(videoId));
      dispatch(fetchRelationVideo(videoId));
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

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
          <Tooltip title={snippet?.channelTitle}>
            <Video.ChannelTitle
              dangerouslySetInnerHTML={{
                __html: snippet?.channelTitle,
              }}
            />
          </Tooltip>
          <Video.View>
            <UilThumbsUp />
            {statistics?.likeCount}
          </Video.View>
          <Video.View>
            <UilEye />
            {statistics?.viewCount}
          </Video.View>
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
      </Video>
      <RelationVideos />
    </Container>
  );
};

export default VideoDetails;
