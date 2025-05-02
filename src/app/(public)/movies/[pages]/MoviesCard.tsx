import {FC} from "react";
import {IMovies} from "@/models/IMovies";
import styles from "./MovieCard.module.css";
import Link from "next/link";
import noPic from "@/app/(public)/img/nopic.jpg"
import Image from "next/image";
import {genresToStr} from "@/helpers/genresToStr";

type Props = {
    movie: IMovies
};

export const MovieCard: FC<Props> = ({ movie }) => {
    return (
        <Link href={{pathname:'/movies',query:{movieInfo:JSON.stringify(movie)}}}>
        <div className={styles.card}>
            { movie.poster_path ? <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                className={styles.image}
            /> :<Image
                src={noPic}
                alt={movie.title}
                width={500}
                height={750}
                className={styles.image}
            />}
            <div className={styles.content}>
                <h2 className={styles.title}>{movie.title}</h2>
                <p className={styles.date}>{movie.release_date}</p>
                <p className={styles.overview}>{movie.overview}</p>
                <span className={styles.genres}>Genres: {genresToStr(movie.genre_ids)}</span>
                <div className={styles.footerMovie}>
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                    <span className={styles.language}> {movie.original_language.toUpperCase()}</span>

                </div>
            </div>
        </div>
        </Link>
    );
};
