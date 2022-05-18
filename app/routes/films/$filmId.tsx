import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getFilmById } from "~/api/films";
import type { Film } from "~/api/films";
import FilmBanner from "~/components/FilmBanner";
import CharacterList from "~/components/CharacterList";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "filmId is required");
  const film = await getFilmById(params.filmId);
  return film;
};

export const meta: MetaFunction = ({ data }) => {
  const { title, description } = data;
  return { title, description };
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
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
