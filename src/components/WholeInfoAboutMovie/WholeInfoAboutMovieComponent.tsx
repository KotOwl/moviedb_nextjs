import styles from './wholeInfo.module.css'
import {FC} from "react";
import {jsonParseTyping} from "@/helpers/jsonParseTyping";
import {IMovies} from "@/models/IMovies";
import {genresToStr} from "@/helpers/genresToStr";

type movieInfoStr = {
    movieStr: string | string[] | undefined
}
export const WholeInfoAboutMovieComponent: FC<movieInfoStr> = ({movieStr}) => {

    const movie = jsonParseTyping<IMovies>(movieStr)

    return (
        <div className={styles.card}>
            {movie && <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={750}
                    className={styles.image}
                />
                <div className={styles.content}>
                    <h2 className={styles.title}>{movie.title}</h2>
                    <p><strong>Original Title:</strong> {movie.original_title}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                    <p><strong>Popularity:</strong> {movie.popularity}</p>
                    <p><strong>Vote Average:</strong> ⭐ {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)</p>
                    <p><strong>Adult:</strong> {movie.adult ? "Yes" : "No"}</p>
                    <p><strong>Video:</strong> {movie.video ? "Yes" : "No"}</p>
                    <p className={styles.overview}><strong>Overview:</strong> {movie.overview}</p>
                    <p><strong>Genres:</strong> {genresToStr(movie.genre_ids)}</p>
                </div>
            </div>}
        </div>
    )
        ;
};