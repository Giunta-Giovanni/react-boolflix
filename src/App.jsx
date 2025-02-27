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

  // Log dei film quando viene aggiornato
  useEffect(() => {
    // Verifica se la lunghezza dell'array 'film' è maggiore di 0
    // Questo serve per evitare il log quando 'film' è vuoto
    if (film.length > 0) {
      // 2. Se la condizione è vera, stampiamo i film aggiornati nella console
      console.log("Film aggiornati:", film);
    }
  },
    //Questo effetto si attiva ogni volta che la variabile 'film' cambia
    [film]
  );

  return (
    <>
      <MediaContext.Provider value={{
        film, setFilm, search, setSearch
      }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MediaPages />} />
            </Route>
          </Routes>
        </BrowserRouter >

      </MediaContext.Provider>
    </>
  )
}
