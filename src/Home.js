import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  muthuMovieSongAction,
  padayappaMovieSongAction,
  moodSelection,
} from './App'
import Annaathe from './audio/Annaatthe.mp3'

const Home = () => {
  const songs = useSelector((state) => state)
  const dispatch = useDispatch()
  const moodFind = songs.isMood ? 'Music Mode' : 'Normal Mode'
  return (
    <div>
      <button className="button" onClick={() => dispatch(moodSelection())}>
        {moodFind}
      </button>
      {songs.isMood && (
        <>
          <div>
            <h2>Start Music</h2>
            <h2>Movie Name is "{songs.movieName}"</h2>
            {songs?.songName?.length > 0 && (
              <h3>Song Name is "{songs.songName}"</h3>
            )}
          </div>
          <button
            className="button"
            onClick={() => dispatch(padayappaMovieSongAction())}
          >
            Padayappa
          </button>
          <button
            className="button"
            onClick={() => dispatch(muthuMovieSongAction())}
          >
            Muthu
          </button>
          <button
            className="button"
            onClick={() =>
              dispatch({
                type: 'New Song',
                payload: Annaathe,
              })
            }
          >
            Annaatthe
          </button>
          <div className='MarginTop'>
            <audio src={songs.song} type="audio/mpeg" controls />
          </div>
        </>
      )}
    </div>
  )
}

export default Home
