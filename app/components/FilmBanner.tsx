import { Link } from "@remix-run/react";
import React from "react";
import type { Film } from "~/api/films";

type FilmBannerProps = {
  film: Film;
};

const FilmBanner: React.FC<FilmBannerProps> = ({ film }) => {
  return (
    <div>
      <div className="w-full h-96 overflow-hidden relative">
        <div className="w-full h-full flex flex-col absolute justify-between items-start">
          <Link to="/" className="text-white p-5 text-2xl hover:underline">
            Go Back
          </Link>
          <div className="bg-slate-700/60 p-5">
            <div className="text-6xl font-bold text-white">{film.title}</div>
          </div>
        </div>
        <img
          src={film.movie_banner}
          className="w-full h-auto"
          style={{ marginTop: "-100px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default FilmBanner;
