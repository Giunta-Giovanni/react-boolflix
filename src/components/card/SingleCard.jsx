// importiamo axios
import axios from "axios";
// importiamo gli hook di react
import { useState, useEffect } from "react";
// importiamo gli hook di react router dom
import { useParams, Link } from "react-router-dom"


export default function SingleCard() {
    const [singleMedia, setSingleMedia] = useState([])
    // let realeaseData = '';
    const { id } = useParams();
    const key = 'api_key=81bf1480bc7e4f2e46f185cb4b586229'
    const endpointFindSerie = `https://api.themoviedb.org/3/tv/${id}?${key}`
    const endpointFindmovie = `https://api.themoviedb.org/3/movie/${id}?${key}`

    function fetchData() {
        axios.get(endpointFindSerie)
            .then(res => {
                const generi = res.data.genres.map(genere => genere.name).join(", ");
                const creatori = res.data.created_by.map(creatore => creatore.name).join(", ");

                setSingleMedia({
                    ...res.data,
                    Realeasedata: new Date(res.data.first_air_date).getFullYear(),
                    generi: generi,
                    creatori: creatori,
                });
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    // Non stampiamo l'errore 404, ma passiamo direttamente alla ricerca del film
                    axios.get(endpointFindmovie)
                        .then(res => {
                            const generi = res.data.genres.map(genere => genere.name).join(", ");
                            setSingleMedia({
                                ...res.data,
                                Realeasedata: new Date(res.data.release_date).getFullYear(),
                                generi: generi,
                            });
                        })
                        .catch(err => console.error("Errore nel recupero del film:", err));
                } else {
                    console.error("Errore generico nel recupero dei dati:", error);
                }
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(singleMedia)

    return (
        <div className="container">
            <div className="single-card-box">
                {/* sezione foto */}
                <img src={`https://image.tmdb.org/t/p/original/${singleMedia.backdrop_path}`} alt="" />
                <Link to={'/serie-tv'}>
                    <i className="fa-solid fa-circle-arrow-left return"></i>
                </Link>


                <div className="row my-4">

                    <h5>{singleMedia.original_title || singleMedia.original_name}</h5>

                    <div className="col-8">
                        <div className="info-principali">
                            <span>{singleMedia.Realeasedata}</span>
                            {singleMedia.number_of_seasons !== undefined ?
                                < span > {singleMedia.number_of_seasons} stagioni</span> : null
                            }

                            <span className="badge">HD</span>
                            <span className="badge badge-sub">CC</span>
                        </div>

                        <div className="description">
                            {singleMedia.overview}
                        </div>

                    </div>
                    <div className="col-4">
                        <p className="info-serie"><span>Cast: </span>{singleMedia.creatori}</p>
                        <p className="info-serie"><span>Generi: </span>{singleMedia.generi}</p>
                        <p className="info-serie"><span>Caratteristiche: </span>{singleMedia.type}</p>
                    </div>
                </div>
            </div>

            {/* sezione informazioni del film */}

        </div >

    )

}