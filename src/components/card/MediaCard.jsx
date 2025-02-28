import Flag from 'react-world-flags';

export default function MediaCard(props) {
    const { media } = props
    // console.log('props media', media)
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
                    <p>{media.title || media.name}</p>
                    {/* Titolo Originale */}
                    <p>{media.original_title || media.original_name}</p>
                    {/* Lingua */}
                    <Flag className="flag-icon " code={media.original_language} height="16" fallback={<span className='flag-icon'>Unknown</span>} />
                    {/* Voto */}
                    <p>{media.vote_average}</p>
                </div>
            </div>
        </div >
    )
}