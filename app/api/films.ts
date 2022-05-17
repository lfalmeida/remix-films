export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
};

const API_URL = "https://ghibliapi.herokuapp.com";

export async function getFilms(): Promise<Film[]> {
  const response = await fetch(`${API_URL}/films`);
  const films = await response.json();
  return films;
}
