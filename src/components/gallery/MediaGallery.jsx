import { useContext } from "react";
import MediaContext from "../../contexts/MediaContext";

import MediaCard from "../card/MediaCard";
// import FilmCard from "./card/FilmCard";
// import SerieCard from "./card/SerieCard";

export default function MediaGallery() {
    const { media, film, series } = useContext(MediaContext);

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

