import styled from "styled-components";

const Container = styled.div`
  flex-basis: 84%;
  padding: 20px 30px;
`;

const CardWrapper = styled.div`
  display: grid;
  justify-content: space-between;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

export { Container, CardWrapper };
