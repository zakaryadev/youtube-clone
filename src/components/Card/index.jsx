import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styled";
import moment from "moment";

const VideoCard = ({ id, snippet, onClick }) => {
  return (
    <Card>
      <Link
        to={`/watch?v=${id?.videoId}`}
        onClick={() => onClick({ id, snippet })}
      >
        <Card.Thumbnail>
          <img src={snippet?.thumbnails?.medium?.url} alt="thumbnail" />
        </Card.Thumbnail>
      </Link>
      <Card.Content>
        <Card.ContentItem>
          <Tooltip title={snippet?.title}>
            <Card.Title>{snippet?.title?.slice(0, 50)}...</Card.Title>
          </Tooltip>
        </Card.ContentItem>
        <Card.ContentItem>
          <Card.Channel tooltip="title">
            <Tooltip title={snippet?.channelTitle}>
              <span>{snippet?.channelTitle}</span>
            </Tooltip>
          </Card.Channel>
        </Card.ContentItem>
        <Card.ContentItem>
          <Tooltip
            title={moment(snippet?.publishTime).format(
              "dddd, MMMM Do YYYY, h:mm:ss a"
            )}
          >
            <Card.Statistic>
              {moment(snippet?.publishTime).fromNow()}
            </Card.Statistic>
          </Tooltip>
        </Card.ContentItem>
      </Card.Content>
    </Card>
  );
};

export default VideoCard;
