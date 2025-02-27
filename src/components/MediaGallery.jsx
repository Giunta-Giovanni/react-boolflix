import { useContext } from "react"
import MediaContext from "../contexts/MediaContext"

export default function MediaGallery() {
    const { film } = useContext(MediaContext)
    return (

        <>
            {
                film.map(film => (
                    <div key={film.id} className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
                        <div>
                            {/* Titolo */}
                            <h2>{film.title}</h2>
                            {/* Titolo Originale */}
                            <h2>{film.original_title}</h2>
                            {/* Lingua */}
                            <p>{film.original_language}</p>
                            {/* Voto */}
                            <p>{film.vote_average}</p>
                        </div>
                    </div>
                ))
            }
        </>

    )
}
