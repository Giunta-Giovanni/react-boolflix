import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';
import lang from '../../data/language';

import { Link } from 'react-router-dom';
// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/'

export default function MediaCard(props) {
    const { media } = props

    let linguaOriginale = media.original_language;
    let code = lang[linguaOriginale];


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
            <Link to={`/${media.id}`}>
                <div className="bk-card-box-image">
                    <img
                        className="bk-card-image"
                        src={`${urlRadiceimg}${media.poster_path}`}
                        alt={media.original_title || media.original_name}
                    />
                    <div className="bk-card-retro">
                        {/* Titolo */}
                        <p>{media.title || media.name}</p>
                        {/* Titolo Originale */}
                        <p>{media.original_title || media.original_name}</p>
                        {/* Lingua */}
                        {code !== undefined ? <Flag code={code} height="16" /> : <Flag code='che' height="16" />}


                        {/* Voto */}
                        <div>
                            {Star(media.vote_average)}
                        </div>

                    </div>
                </div>
            </Link>

        </div >
    )
}