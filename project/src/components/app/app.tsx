import MainPage from '../main-page/main-page';
type Film = {
  name: string,
  url: string,
  poster: string,
}

type FilmPreview = {
  name: string,
  poster: string,
  picture: string,
  genre: string,
  year: string,
}

type AppScreenProps = {
  currentFilm: FilmPreview,
  filmsList: Film[],
}

function App({currentFilm, filmsList}: AppScreenProps): JSX.Element {
  return (
    <MainPage currentFilm={currentFilm} filmsList={filmsList}/>
  );
}

export default App;
