import { Link } from "@remix-run/react";
import React from "react";
import type { FilmCharacter } from "~/api/films";

type CharacterListProps = {
  characters?: FilmCharacter[];
};

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div className="flex-1 max-w-md">
      <h3 className="text-3xl">Characters</h3>
      <ul className="flex flex-col space-y-3 my-3">
        {characters?.map((character) => (
          <li key={character.id}>
            <Link
              to={character.id}
              className="w-full hover:underline p-3 rounded border border-slate-400 inline-block"
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
