import React from "react";
import { TextInput, Pagination, Loader, Grid, Center } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import useAxios from "axios-hooks";
import { useSearchParams } from "react-router-dom";
import { MovieSearchResult } from "../components/MovieList";
import { showNotification } from "@mantine/notifications";
import MovieCard from "../components/MovieCard";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [keyword, setKeyword] = React.useState(
    searchParams.get("keyword") || ""
  );
  const [page, setPage] = React.useState(
    parseInt(searchParams.get("page") || "1")
  );
  const [debouncedKeyword] = useDebouncedValue(keyword, 500);

  const [{ data, loading, error }] = useAxios<MovieSearchResult>({
    url: "https://www.omdbapi.com/?apikey=320f6ab2",
    params: {
      s: debouncedKeyword,
      page,
    },
  });

  const renderLoader = () => {
    if (loading)
      return (
        <Center>
          <Loader />
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

  const renderPagination = () => {
    console.log(data);
    if (!data || data.Response === "False") return null;
    return (
      <Pagination
        siblings={3}
        total={Math.floor(Number(data.totalResults) / 10)}
        page={Number(page)}
        onChange={(page) => {
          setSearchParams({
            keyword: debouncedKeyword,
            page: page.toString(),
          });
          setPage(page);
        }}
      />
    );
  };

  return (
    <>
      <TextInput
        placeholder="keyword"
        label="Search"
        required
        value={keyword}
        onChange={(env) => {
          setKeyword(env.target.value);
          setSearchParams({
            keyword: env.target.value,
          });
        }}
      />
      {renderLoader()}
      {renderError()}
      <Grid grow style={{ margin: 10 }}>
        {data &&
          data.Search &&
          data.Search.map((movie) => (
            <Grid.Col key={movie.imdbID} span={3}>
              <MovieCard {...movie} />
            </Grid.Col>
          ))}
      </Grid>
      {renderPagination()}
    </>
  );
}

export default SearchPage;
