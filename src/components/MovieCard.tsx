import React from "react";
import { Card, Image, Group, Badge, Text, Button, useMantineTheme } from '@mantine/core';
import { Summary } from "./MovieList";
import {
    useNavigate,
  } from "react-router-dom";

function MovieCard({Poster, Title, imdbID, Year}: Summary) {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    return (      
    <Card shadow="sm" p="lg">
    <Card.Section>
      <Image src={Poster} height={160} alt="Title" />
    </Card.Section>

    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
      <Text weight={500}>{Title}</Text>
      <Badge color="pink" variant="light">
          {Year}
      </Badge>
    </Group>

    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={ () => {
        navigate(`${imdbID}`);
    }}>
      Detail
    </Button>
  </Card>);
}

export default MovieCard