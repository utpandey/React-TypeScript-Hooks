import React from "react";
import { IEpisode, IState, IAction } from "../Components/intefaces";

const EpisodesList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favourites,store } = props;
  const {state,dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div className=""> {episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season : {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state,dispatch,episode)}>
            {favourites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Remove Fav"
              : "Add to Fav"}
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
