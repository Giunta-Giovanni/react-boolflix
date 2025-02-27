import { useContext } from "react"
import MediaContext from "../contexts/MediaContext";
import axios from "axios"

const endpointFilm = 'https://api.themoviedb.org/3/search/movie?api_key=81bf1480bc7e4f2e46f185cb4b586229&';


export default function SearchBar() {
    const { setFilm, search, setSearch } = useContext(MediaContext)
    // Creiamo una funzione unica per gestire l'evento onChange dei nostri campi.

    function handleSearchData(event) {
        // all'avvio della funzione richiama currentForm Data
        setSearch(event.target.value)
    }

    // creiamo una funzione per richiedere i dati dall'api una volta inviata la ricerca
    function handleSubmitForm(e) {
        e.preventDefault()
        // resetta i dati dell'oggetto film
        setFilm([])
        console.log("Sto inviando la richiesta per:", search);
        axios.get(`${endpointFilm}query=${search}`)
            .then(res =>
                // console.log(res.data.results),
                // inseriamo la risposta all'interno di film tramite setFilm
                // setFilm(res.data.results),
                // uso la risposta api per prendere gli articoli e gli aggiungo i nuovi dati del form 
                setFilm((currentFilm) => [...currentFilm, ...res.data.results],
                )
            )
            .catch((error) => {
                console.error("Errore durante il recupero dei dati:", error);
            });

        // resettiamo la barra di ricerca 
        setSearch("")

    }
    return (
        < form
            onSubmit={handleSubmitForm}
            className="d-flex search-form"
            role="search" >
            {/* input di ricerca */}

            < input
                className="form-control me-2"
                type="search"
                value={search}
                onChange={handleSearchData}
                placeholder="Search"
                aria-label="Search"
            />

            {/* pulsante di invio del form */}
            < button className="btn" type="submit" >
                Search
            </button >
        </form >
    )
}