import { useContext, useEffect } from "react";
import MediaContext from "../../contexts/MediaContext";
import axios from "axios";

import FilmCard from "../card/FilmCard";

const endpointPopularfilm = 'https://api.themoviedb.org/3/movie/popular?api_key=81bf1480bc7e4f2e46f185cb4b586229';

export default function FilmGallery() {
    const { film, setFilm } = useContext(MediaContext);

    // Funzione di richiesta Api
    function fetchFilm() {
        // richiesta di chiamata a localhost 3000
        axios.get(endpointPopularfilm)
            // prendi i dati di risposta e inseriscili a res.data
            .then((res) =>
                setFilm(res.data.results),


            ).catch((error) => {
                console.error("Errore durante il recupero dei dati:", error);
            });
    }
    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPizzas();
    // Solo al primo rendering
    useEffect(() => { fetchFilm() }, []);

    return (
        <section className="content-box">
            <div className="container">
                {/* card dei films */}
                <div className="box-bk-card">
                    {film.map(film => (
                        <FilmCard
                            key={film.id}
                            film={film}
                        />
                    ))}
                </div>
            </div >
        </section>
    );
}

