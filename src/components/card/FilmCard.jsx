import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';
import lang from '../../data/language';
import { Link } from 'react-router-dom';
// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/'


export default function FilmCard(props) {
    const { film } = props

    let linguaOriginale = film.original_language;
    let code = lang[linguaOriginale];

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-film-card">
            <Link to={`/${film.id}`}>
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
                        {code !== undefined ? <Flag code={code} height="16" /> : <Flag code='che' height="16" />}
                        {/* Voto */}
                        <div>
                            {Star(film.vote_average)}
                        </div>
                    </div>
                </div>
            </Link>

        </div >
    )
}