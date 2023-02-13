import styled from "styled-components";

const Card = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 15px;
  & a {
    color: #ffffff;
    text-decoration: none !important;
  }
  background: #0f0f0f;
  transition: all 0.4s ease;
`;

Card.Thumbnail = styled.div`
  box-sizing: border-box;
  & img {
    width: 150px;
    border-radius: 8px;
  }
`;

Card.Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.4s ease-in-out;
`;

Card.ContentItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;

Card.Avatar = styled.div`
  & img {
    height: 36px;
    border-radius: 50px;
  }
`;

Card.Title = styled.p`
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  display: block;
  max-height: 4rem;
  display: box;
  text-overflow: ellipsis;
  white-space: normal;
  text-decoration: none !important;
`;

Card.Channel = styled.a`
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  opacity: 0.4;
  text-decoration: none;
  &:hover {
    opacity: 0.6;
  }
`;

Card.Statistic = styled.p`
  font-size: 14px;
  color: #ffffff;
  opacity: 0.5;
`;

export { Card };
