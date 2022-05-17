import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getFilmById } from "~/api/films";
import type { Film } from "~/api/films";
import FilmBanner from "~/components/FilmBanner";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "filmId is required");
  const film = await getFilmById(params.filmId);
  console.log("feching film", film.title);
  return film;
};

export default function FilmDetails() {
  const film = useLoaderData<Film>();
  return (
    <div className="">
      <FilmBanner film={film} />
    </div>
  );
}
