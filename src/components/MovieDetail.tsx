import React from "react";
import * as Styled from "./MovieDetail.styles";
import { Detail } from "./MovieDetail.types";

function MovieDetail({
  Poster,
  Plot,
  Country,
  Actors,
  Awards,
  Genre,
  Title,
  Director,
  Language,
  Released,
  Website,
  Writer,
}: Detail) {
  return (
    <>
      <Styled.MainLayout>
        <Styled.ImageMask>
          <img src={Poster} alt={Title}></img>
        </Styled.ImageMask>
        <Styled.InfoLayout>
          <Styled.Label>Title</Styled.Label>
          <Styled.Value>{Title}</Styled.Value>
          <Styled.Label>Genre</Styled.Label>
          <Styled.Value>{Genre}</Styled.Value>
          <Styled.Label>Released</Styled.Label>
          <Styled.Value>{Released}</Styled.Value>
          <Styled.Label>Director</Styled.Label>
          <Styled.Value>{Director}</Styled.Value>
          <Styled.Label>Writer</Styled.Label>
          <Styled.Value>{Writer}</Styled.Value>
          <Styled.Label>Country</Styled.Label>
          <Styled.Value>{Country}</Styled.Value>
          <Styled.Label>Language</Styled.Label>
          <Styled.Value>{Language}</Styled.Value>
          <Styled.Label>Actors</Styled.Label>
          <Styled.Value>{Actors}</Styled.Value>
          <Styled.Label>Website</Styled.Label>
          <Styled.Value>{Website}</Styled.Value>
          <Styled.Label>Awards</Styled.Label>
          <Styled.Value>{Awards}</Styled.Value>
          <Styled.Label>Plot</Styled.Label>
          <Styled.Value>{Plot}</Styled.Value>
        </Styled.InfoLayout>
      </Styled.MainLayout>
    </>
  );
}

export default MovieDetail;
