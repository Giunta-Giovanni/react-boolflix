import { useEffect, useContext } from "react";
import MediaContext from "../contexts/MediaContext";

import MediaCard from "./card/MediaCard";

import axios from "axios";
const endpointPopularAll = 'https:api.themoviedb.org/3/trending/all/day?api_key=81bf1480bc7e4f2e46f185cb4b586229';

export default function MediaGallery() {
    const { media, setMedia } = useContext(MediaContext);

    // Funzione di richiesta Api
    function fetchmedia() {
        // richiesta di chiamata a localhost 3000
        axios.get(endpointPopularAll)
            // prendi i dati di risposta e inseriscili a res.data
            .then((res) =>
                setMedia(res.data.results)

            ).catch((error) => {
                console.error("Errore durante il recupero dei dati:", error);
            });
    }
    // richiamo la funzione di richiesta dati al caricamento del componente
    // fetchPizzas();
    // Solo al primo rendering
    useEffect(() => { fetchmedia() }, []);



    return (
        <section className="content-box">
            <div className="container">

                {/* card dei media */}
                <div className="box-bk-card">
                    {media.map(media => (
                        <MediaCard
                            key={media.id}
                            media={media}
                        />
                    ))}
                </div>
            </div >
        </section>
    );
}

