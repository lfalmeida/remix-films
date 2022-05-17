import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getFilmById } from "~/api/films";
import type { Film } from "~/api/films";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "filmId is required");
  const film = await getFilmById(params.filmId);
  console.log("feching film", film.title);
  return film;
};

export default function FilmDetails() {
  const film = useLoaderData<Film>();
  const { description, characters = [] } = film;
  return (
    <div className="">
      <FilmBanner film={film} />
      <div className="p-10">
        {description}
        <div className="flex py-5 space-x-5">
          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  );
}
