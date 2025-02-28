// funzione per creare le stelle
export default function Star(num) {
    // dividi il numero totale di valutazione di 2 e arrotondalo
    let voto = Math.round(num / 2)
    let empty = 5 - voto
    // salva la variabile che conterrà le stelle inizialmente vuota
    let stars = [];
    // se il voto è diverso da 0 
    if (voto != 0) {
        // effettuiamo un ciclo con lunghezza voti
        for (let i = 0; i < voto; i++) {
            // pusciamo all'interno del nostro array le stelline per quante volte viene effettuato il ciclo
            stars.push(<i key={i} className="fa-solid fa-star"></i>)
        }
        for (let i = 0; i < empty; i++) {
            // pusciamo all'interno del nostro array le stelline per quante volte viene effettuato il ciclo
            stars.push(<i key={voto + i} className="fa-regular fa-star"></i>)
        }
        // se il voto non è stato dato o è uguale a 0 
    } else {
        for (let i = 0; i < empty; i++) {
            // pusciamo all'interno del nostro array le stelline per quante volte viene effettuato il ciclo
            stars.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    }
    return stars
}