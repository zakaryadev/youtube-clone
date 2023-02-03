import { Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styled";

const VideoCard = () => {
  const dataDifference = (dat, current = new Date()) => {
    const time = new Date(dat);
    const year = time.getFullYear();
    const month = time.getUTCMonth();
    const day = time.getUTCDay();
    if (current.getUTCFullYear() - year > 0) {
      return current.getUTCFullYear() - year + " год назад";
    } else if (current.getUTCMonth() - month > 0) {
      return current.getUTCMonth() - month + " месяц назад";
    } else {
      return time.getUTCDay() - day + " день назад";
    }
  };

  return (
    <Card>
      <Link to="/history">
        <Card.Thumbnail>
          <img
            src="https://i.ytimg.com/vi/khoSIBlUKTU/mqdefault.jpg"
            alt="thumbnail"
          />
        </Card.Thumbnail>
        <Card.Content>
          <Card.ContentItem>
            <Card.Avatar>
              <img
                src="https://yt3.ggpht.com/ILMOLWQODN1-TX3Cg2DNZzol60eAMxBgf_9Z_Y6-BUDWBboGFynDC1P-cfuqd4pjzTVIJylEZg=s88-c-k-c0x00ffffff-no-rj-mo"
                alt="Channel-avatar"
              />
            </Card.Avatar>
            <Card.Title>The Witcher - Geralt vs Renfri 4K UHD</Card.Title>
          </Card.ContentItem>
          <Card.ContentItem>
            <Card.Channel tooltip="title" href="/">
              <Tooltip title="StarLena">
                <span>StarLena</span>
              </Tooltip>
            </Card.Channel>
          </Card.ContentItem>
          <Card.ContentItem>
            <Card.Statistic>
              {dataDifference("2020-07-24T04:30:47Z")}
            </Card.Statistic>
          </Card.ContentItem>
        </Card.Content>
      </Link>
    </Card>
  );
};

export default VideoCard;
