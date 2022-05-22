import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";
import { Center, Skeleton } from "@mantine/core";
import MovieDetail from "../components/MovieDetail";
import { showNotification } from "@mantine/notifications";
import { Detail } from "../components/MovieDetail.types";

function DetailPage() {
  const { imdbID } = useParams();
  console.log(imdbID);
  const [{ data, loading, error }] = useAxios<Detail>({
    url: "https://www.omdbapi.com/?apikey=320f6ab2",
    params: {
      i: imdbID,
    },
  });

  const renderSkeleton = () => {
    if (loading)
      return (
        <Center>
          <Skeleton height={400} width={300} />
        </Center>
      );
  };

  const renderError = () => {
    if (error) {
      showNotification({
        title: "Error",
        message: error.message,
        color: "red",
      });
    }
  };

  const renderDetail = () => {
    if (loading || !data) return null;
    return <MovieDetail {...data} />;
  };

  return (
    <>
      {renderSkeleton()}
      {renderError()}
      {renderDetail()}
    </>
  );
}

export default DetailPage;
