import styled from "styled-components";

export const MainLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
`;

export const InfoLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  max-width: 450px;
`;

export const Label = styled.span`
  font-weight: bold;
  padding: 5px;
`;

export const Value = styled.span``;

export const ImageMask = styled.div`
  mask-image: radial-gradient(black 30%, rgba(0, 0, 0, 0.6));
  border: solid 6px;
  border-radius: 3px;
`;
