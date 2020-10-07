import { IEpisode, IState, IAction } from "./intefaces";

export const fetchDataACtion = async (dispatch: any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}
export const toggleFavAction = (state:IState,dispatch: any ,episode: IEpisode | any): IAction => {
  console.log(episode);
  const episodeInFav = state.favourites.includes(episode)
  console.log(episodeInFav);
  let dispatchObj = {
    type: 'ADD_FAV',
    payload: episode
  }
  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter((fav: IEpisode ) => fav.id !== episode.id)
    dispatchObj = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode
    }
  }
  return dispatch(dispatchObj)
}
