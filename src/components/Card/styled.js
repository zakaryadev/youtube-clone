import styled from "styled-components";

const Card = styled.div`
  position: relative;
  cursor: pointer;
  height: 265px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & a {
    color: #ffffff;
    text-decoration: none !important;
  }
  &:hover {
    & a {
      & > div {
        & img {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
    & > div:nth-child(2) {
      padding: 0 5px;
    }
  }
  background: #0f0f0f;
  transition: all 0.4s ease;
  &:hover {
    position: relative;
    transform: scale(1.05);
    background: #212121;
    border-radius: 12px;
  }
`;

Card.Thumbnail = styled.div`
  box-sizing: border-box;
  & img {
    height: 150px;
    border-radius: 12px;
    width: 100%;
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
