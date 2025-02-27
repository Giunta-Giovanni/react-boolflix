import { useContext } from "react";
import MediaContext from "../contexts/MediaContext";

import MediaCard from "./MediaCard";

export default function MediaGallery() {
    const { film } = useContext(MediaContext);

    return (
        <section className="content-box">
            <div className="container">
                <div className="box-bk-card">
                    {film.map(film => (<MediaCard key={film.id} film={film} />

                    ))}
                </div>
            </div>
        </section>
    );
}