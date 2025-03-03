import { useContext } from "react"
import MediaContext from '../contexts/MediaContext'

const urlRadiceimg = 'https://image.tmdb.org/t/p/w342/'

export default function NuoviPopolariPage() {

    const { film } = useContext(MediaContext);
    console.log('film in nuovi popolari page', film)

    return (
        <div className="p-banner">
            <div className="p-slider" style={{ "--quantity": film.length }}>
                {film.map((film, index) => (
                    <div className="p-item" key={index} style={{ "--position": `${index + 1}` }}>
                        <img src={`${urlRadiceimg}/${film.poster_path}`} alt={film.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}