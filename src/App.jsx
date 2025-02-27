// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo i contesti
import MediaContext from "./contexts/MediaContext"

// importiamo gli hooks di react
import { useState, useEffect } from "react";

// importiamo la libreria di axios
import axios from "axios";
// salviamo gli endpoint
const endpointFilm = 'https://api.themoviedb.org/3/search/movie?api_key=81bf1480bc7e4f2e46f185cb4b586229&';

// importiamo i layout
import DefaultLayout from "./layout/DefaultLayout";

// importiamo le pagine
import MediaPages from "./pages/MediaPages";

export default function App() {
  // creiamo una variabile di stato che conterrà il nostro array di oggetti con i film ricercati
  const [film, setFilm] = useState([])

  const [search, setSearch] = useState("")

  // Creiamo una funzione unica per gestire l'evento onChange dei nostri campi.
  function handleSearchData(event) {
    // all'avvio della funzione richiama currentForm Data
    setSearch(event.target.value)
  }

  // creiamo una funzione per richiedere i dati dall'api una volta inviata la ricerca
  function handleSubmitForm(e) {
    e.preventDefault()
    console.log("Sto inviando la richiesta per:", search);
    axios.get(`${endpointFilm}query=${search}`)
      .then(res =>
        // console.log(res.data.results),
        // inseriamo la risposta all'interno di film tramite setFilm
        setFilm(res.data.results)
      )
      .catch((error) => {
        console.error("Errore durante il recupero dei dati:", error);
      });

    setSearch("")

  }
  console.log(film)



  return (
    <>
      <MediaContext.Provider value={{ film, setFilm }}>

      </MediaContext.Provider>
    </>
  )
}


// {/* generiamo il form */ }
// <form
//   onSubmit={handleSubmitForm}
//   className="d-flex"
//   role="search">
//   {/* input di ricerca */}
//   <input
//     className="form-control me-2"
//     type="search"
//     value={search}
//     onChange={handleSearchData}
//     placeholder="Search"
//     aria-label="Search"
//   />

//   {/* pulsante di invio del form */}
//   <button className="btn btn-outline-success" type="submit">
//     Search
//   </button>
// </form>



// {/* output */ }
// <div>
//   {film.map(film => (
//     <div key={film.id} className="col-12 col-sm-6 col-md-4 col-lg-2 bk-card">
//       <div>
//         {/* Titolo */}
//         <h2>{film.title}</h2>
//         {/* Titolo Originale */}
//         <h2>{film.original_title}</h2>
//         {/* Lingua */}
//         <p>{film.original_language}</p>
//         {/* Voto */}
//         <p>{film.vote_average}</p>
//       </div>
//     </div>
//   ))}
// </div>