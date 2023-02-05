import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styled";
import moment from "moment";
import { fetchChannel } from "../../redux/slices/searchSlice";
import { useDispatch } from "react-redux";
// dispatch(fetchChannel(snippet.channelId));
const VideoCard = ({ id, snippet }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {}, []);
  return (
    <Card>
      <Link to={`watch?v=${id?.videoId}`}>
        <Card.Thumbnail>
          <img src={snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        </Card.Thumbnail>
      </Link>
      <Card.Content>
        <Card.ContentItem>
          <Card.Title>{snippet?.title?.slice(0, 50)}...</Card.Title>
        </Card.ContentItem>
        <Card.ContentItem>
          <Card.Channel tooltip="title" href="/@StarLena">
            <Tooltip title="StarLena">
              <span>{snippet?.channelTitle}</span>
            </Tooltip>
          </Card.Channel>
        </Card.ContentItem>
        <Card.ContentItem>
          <Card.Statistic>
            {moment(snippet?.publishTime).fromNow()}
          </Card.Statistic>
        </Card.ContentItem>
      </Card.Content>
    </Card>
  );
};

export default VideoCard;

// const dataDifference = (dat, current = new Date()) => {
//   const time = new Date(dat);
//   const year = time.getFullYear();
//   const month = time.getUTCMonth();
//   const day = time.getUTCDay();
//   if (current.getUTCFullYear() - year > 0) {
//     return current.getUTCFullYear() - year + " год назад";
//   } else if (current.getUTCMonth() - month > 0) {
//     return current.getUTCMonth() - month + " месяц назад";
//   } else {
//     return time.getUTCDay() - day + " день назад";
//   }
// };
