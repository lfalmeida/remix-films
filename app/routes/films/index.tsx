import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getFilms } from "~/api/films";
import type { Film } from "~/api/films";

export const loader: LoaderFunction = async () => {
  return getFilms();
};

export const meta: MetaFunction = () => ({
  title: "List | Remix Movies",
});

export default function FilmsIndex() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center mb-4">Studio Ghibli</h1>

      <form action="" className="py-5">
        <label htmlFor="search-input" className="font-bold">
          Search{" "}
          <input
            type="text"
            name="title"
            placeholder="Type a title..."
            className="border-2 rounded py-2 px-3"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-4 gap-4">
        {films.map((film) => (
          <div
            key={film.id}
            className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
          >
            <div>{film.title}</div>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
