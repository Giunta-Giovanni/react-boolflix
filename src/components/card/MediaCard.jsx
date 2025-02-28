import Flag from 'react-world-flags';
import Star from '../../utils/Functions/StarFs';


// salviamo la radice del url immagine con
const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/'
// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ],
export default function MediaCard(props) {
    const { media } = props


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
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
                    <Flag className="flag-icon " code={media.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <div>
                        {Star(media.vote_average)}
                    </div>

                </div>
            </div>
        </div >
    )
}