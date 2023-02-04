import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styled";
import moment from "moment";

const VideoCard = ({ id, snippet }) => {
  return (
    <Card>
      <Link to="/history">
        <Card.Thumbnail>
          <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
        </Card.Thumbnail>
      </Link>
      <Card.Content>
        <Card.ContentItem>
          <Card.Avatar>
            <img src={snippet} alt="Channel-avatar" />
          </Card.Avatar>
          <Card.Title>{snippet.title.slice(0, 30)}...</Card.Title>
        </Card.ContentItem>
        <Card.ContentItem>
          <Card.Channel tooltip="title" href="/@StarLena">
            <Tooltip title="StarLena">
              <span>{snippet.channelTitle}</span>
            </Tooltip>
          </Card.Channel>
        </Card.ContentItem>
        <Card.ContentItem>
          <Card.Statistic>
            {moment(snippet.publishTime).fromNow()}
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
