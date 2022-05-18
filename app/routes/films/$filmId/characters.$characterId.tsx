import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import React from "react";
import invariant from "tiny-invariant";
import type { FilmCharacter } from "~/api/films";
import { getFilmCharacter } from "~/api/films";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, "characterId is required");
  throw new Error("Not implemented");
  return getFilmCharacter(params.characterId);
};

const Character = () => {
  const character = useLoaderData<FilmCharacter>();
  const {
    name,
    gender = "?",
    age = "?",
    eye_color = "?",
    hair_color = "?",
  } = character;
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Character Details</div>
      <div className="p-4 rounded shadow-lg border">
        <div className="text-gray-700 font-bold text-xl mb-2">{name}</div>
        <ul className="py-2">
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Eye Color: {eye_color}</li>
          <li>Hair Color: {hair_color}</li>
        </ul>
      </div>
    </div>
  );
};

export function ErrorBoundary({ error }: any) {
  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Details</div>
      <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
        <div className="text-gray-700 font-bold text-xl mb-2">
          Ops... Sorry something went wrong.
        </div>
        <p>{error?.message}</p>
      </div>
    </div>
  );
}

export default Character;
