import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Comment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const PublishTime = styled.p`
  font-size: 12px;
  font-weight: 300;
  opacity: 0.4;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

Content.Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

Content.Name = styled.div`
  font-size: 14px;
  font-weight: 800;
`;

Content.Time = styled.div`
  font-size: 12px;
  font-weight: 300;
  opacity: 0.4;
`;

Content.Text = styled.div`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
  white-space: break-spaces;
  width: 80%;
  word-wrap: break-word;
`;

export { Container, Comment, Img, Content, PublishTime };
