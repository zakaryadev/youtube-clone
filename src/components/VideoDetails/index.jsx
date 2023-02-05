import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchRelationVideo, fetchVideo} from "../../redux/slices/videoSlice.js";
import {Container, Video} from "./styled.js";

const VideoDetails = () => {
  const dispatch = useDispatch();
  const {video} = useSelector(state => state.video);
  const location = useLocation();
  const videoId = location.search.slice(3);
  React.useEffect(() => {
    dispatch(fetchVideo(videoId));
    dispatch(fetchRelationVideo(videoId));
    
  }, []);
  console.log(video)
  return (<Container>
    <Video>
      <iframe src={`https://www.youtube.com/embed/${videoId && videoId}`} frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
      </iframe>
    </Video>
  </Container>);
};

export default VideoDetails;