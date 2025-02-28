import Flag from 'react-world-flags';

export default function FilmCard(props) {
    const { film } = props
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 media-card">
            <div className="card-box-image">
                {/* <img
                    className="bk-card-image"
                    src={'#'}
                    alt={film.title}
                /> */}
                <div className="card-retro">
                    {/* Titolo */}
                    <p>{film.title}</p>
                    {/* Titolo Originale */}
                    <p>{film.original_title}</p>
                    {/* Lingua */}
                    <Flag className="flag-icon " code={film.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <p>{film.vote_average}</p>
                </div>
            </div>

        </div >
    )
}