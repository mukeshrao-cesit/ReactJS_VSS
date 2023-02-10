import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  padding: 12px;
  margin: 12px;
`;

export const Text = styled.p`
  color: #000;
`;
