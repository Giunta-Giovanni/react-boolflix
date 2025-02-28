import Flag from 'react-world-flags';

export default function SerieCard(props) {
    const { serie } = props
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
                    <p>{serie.name}</p>
                    {/* Titolo Originale */}
                    <p>{serie.original_name}</p>
                    {/* Lingua */}
                    <Flag className="flag-icon " code={serie.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <p>{serie.vote_average}</p>
                </div>
            </div>
        </div >
    )
}