import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';
import lang from '../../data/language';
import { Link } from 'react-router-dom';

// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/';


export default function SerieCard(props) {
    const { serie } = props

    let linguaOriginale = serie.original_language;
    let code = lang[linguaOriginale];
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
            <Link to={`/${serie.id}`}>
                <div className="bk-card-box-image">
                    <img
                        className="bk-card-image"
                        src={`${urlRadiceimg}${serie.poster_path}`}
                        alt={serie.original_name}
                    />
                    <div className="bk-card-retro">
                        {/* Titolo */}
                        <p>{serie.name}</p>
                        {/* Titolo Originale */}
                        <p>{serie.original_name}</p>
                        {/* Lingua */}
                        {code !== undefined ? <Flag code={code} height="16" /> : <Flag code='che' height="16" />}
                        {/* Voto */}
                        <div>
                            {Star(serie.vote_average)}
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    )
}