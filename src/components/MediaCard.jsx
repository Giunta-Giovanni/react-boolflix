export default function MediaCard(props) {
    const { film } = props
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
            <div className="bk-card-box-image">
                {/* <img
                    className="bk-card-image"
                    src={'#'}
                    alt={film.title}
                /> */}
                <div className="bk-card-retro">
                    {/* Titolo */}
                    <p>{film.title}</p>
                    {/* Titolo Originale */}
                    <p>{film.original_title}</p>
                    {/* Lingua */}
                    <p>{film.original_language}</p>
                    {/* Voto */}
                    <p>{film.vote_average}</p>
                </div>
            </div>
        </div>
    )
}