// importiamo gli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo i contesti
import MediaContext from "./contexts/MediaContext"

// importiamo gli hooks di react
import { useState, useEffect } from "react";

// importiamo i layout
import DefaultLayout from "./layout/DefaultLayout";

// importiamo le pagine
import MediaPages from "./pages/MediaPages";

export default function App() {
  // creiamo una variabile di stato che conterrà il nostro array di oggetti con i film ricercati
  const [film, setFilm] = useState([])
  // creiamo una variabile di stato che conterrà il nostro array di oggetti con le serie tv ricercate
  const [series, setSeries] = useState([])

  const [search, setSearch] = useState("")

  // Log dei film quando viene aggiornato
  useEffect(() => {
    // Verifica se la lunghezza dell'array 'film' è maggiore di 0
    // Questo serve per evitare il log quando 'film' è vuoto
    if (film.length > 0 && series.length > 0) {
      // 2. Se la condizione è vera, stampiamo i film aggiornati nella console
      console.log("Film aggiornati:", film);
      console.log("Serie aggiornate:", series);
    }
  },
    //Questo effetto si attiva ogni volta che la variabile 'film' cambia
    [film, series]
  );

  return (
    <>
      <MediaContext.Provider value={{
        film, setFilm, series, setSeries, search, setSearch
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
