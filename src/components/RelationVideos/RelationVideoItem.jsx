import { Tooltip } from "antd";
import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./RelationVideoItem";
const RelationVideoItem = ({ id, snippet }) => {
  return (
    <Card>
      <Link to={`/watch?v=${id?.videoId}`}>
        <Card.Thumbnail>
          <img src={snippet?.thumbnails?.high?.url} alt="thumbnail" />
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

export default RelationVideoItem;
