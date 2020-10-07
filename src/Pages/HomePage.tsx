import React from 'react'
import { IAction,IEpisode, IEpisodeProps } from '../Components/intefaces';
import { Store } from '../Components/Store';
import { fetchDataACtion, toggleFavAction } from '../Components/Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'))

const HomePage = () => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataACtion(dispatch)
  })

 
  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: {state,dispatch},
    toggleFavAction,
    favourites: state.favourites
  }
  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section className='episode-layout'>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </>
  )
}

export default HomePage


