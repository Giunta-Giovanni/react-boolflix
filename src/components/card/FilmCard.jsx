import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';
// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/'


export default function FilmCard(props) {
    const { film } = props
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-film-card">
            <div className="bk-card-box-image">
                <img
                    className="bk-card-image"
                    src={`${urlRadiceimg}${film.poster_path}`}
                    alt={film.original_title || film.original_name}
                />
                <div className="bk-card-retro">
                    {/* Titolo */}
                    <p>{film.title}</p>
                    {/* Titolo Originale */}
                    <p>{film.original_title}</p>
                    {/* Lingua */}
                    <Flag className="flag-icon " code={film.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <div>
                        {Star(film.vote_average)}
                    </div>
                </div>
            </div>

        </div >
    )
}