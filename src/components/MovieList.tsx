export interface MovieSearchResult {
  Search: Summary[];
  totalResults: string;
  Response: string;
}

export interface Summary {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
