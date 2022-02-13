type Film = {
  name: string,
  url: string,
  poster: string,
}
function SmallFilmCard({name, url, poster}: Film): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={url}>{name}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
