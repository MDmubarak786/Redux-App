import './App.css'
import Home from './Home'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import EnPeruPadayappa from './audio/En-Peru-Padayappa.mp3'
import OruvanOruvanMudhalali from './audio/Oruvan-Oruvan-Mudhalali.mp3'

//Actions
export const muthuMovieSongAction = () => ({ type: 'MUTHU_MOVIE_SONGS' })
export const padayappaMovieSongAction = () => ({
  type: 'PADAYAPPA_MOVIE_SONGS',
})
export const moodSelection = () => ({ type: 'MOOD' })

function App() {
  const initialState = {
    song: '',
    songName: '',
    movieName: 'Pls select',
    isMood: false,
  }
  //Reducer
  const songReducer = (state = initialState, actions) => {
    switch (actions.type) {
      case 'MOOD':
        return {
          ...state,
          isMood: !state.isMood,
          song: '',
          songName: '',
          movieName: 'Pls select',
        }
      case 'MUTHU_MOVIE_SONGS':
        return {
          ...state,
          song: OruvanOruvanMudhalali,
          songName: 'Oruvan Oruvan',
          movieName: 'MUTHU',
        }
        break
      case 'PADAYAPPA_MOVIE_SONGS':
        return {
          ...state,
          song: EnPeruPadayappa,
          songName: 'En Peru Padayappa',
          movieName: 'PADAYAPPA',
        }
        break
      case 'New Song':
        return {
          ...state,
          song: actions.payload,
          songName: 'Annaatthe Annaatthe',
          movieName: 'Annaatthe',
        }
        break
      default:
        return {
          ...state,
        }
        break
    }
  }

  let store = createStore(
    songReducer,
    composeWithDevTools(applyMiddleware(logger)),
  )
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default App
