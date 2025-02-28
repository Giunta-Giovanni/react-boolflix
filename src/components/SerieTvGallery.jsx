import { useEffect, useContext } from "react";
import MediaContext from "../contexts/MediaContext";

import SerieCard from "./card/SerieCard";

import axios from "axios";
const endpointPopularSerieTv = 'https://api.themoviedb.org/3/tv/popular?api_key=81bf1480bc7e4f2e46f185cb4b586229';

export default function SerieTvGAllery() {
    const { series, setSeries } = useContext(MediaContext);

    // Funzione di richiesta Api
    function fetchseries() {
        // richiesta di chiamata a localhost 3000
        axios.get(endpointPopularSerieTv)
            // prendi i dati di risposta e inseriscili a res.data
            .then((res) =>
                setSeries(res.data.results)

            ).catch((error) => {
                console.error("Errore durante il recupero dei dati:", error);
            });
    }
    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPizzas();
    // Solo al primo rendering
    useEffect(() => { fetchseries() }, []);



    return (
        <section className="content-box">
            <div className="container">

                {/* card dei media */}
                <div className="box-bk-card">
                    {series.map(serie => (
                        <SerieCard
                            key={serie.id}
                            serie={serie}
                        />
                    ))}
                </div>
            </div >
        </section>
    );
}

