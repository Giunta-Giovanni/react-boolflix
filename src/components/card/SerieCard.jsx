import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';

// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/';

export default function SerieCard(props) {
    const { serie } = props
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
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
                    <Flag className="flag-icon " code={serie.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <div>
                        {Star(serie.vote_average)}
                    </div>
                </div>
            </div>
        </div >
    )
}