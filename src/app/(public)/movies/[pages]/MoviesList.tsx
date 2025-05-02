import {getMovies, searchMoviesByName} from "@/services/moviedb.api";
import {FC} from "react";
import {MovieCard} from "@/app/(public)/movies/[pages]/MoviesCard";
import styles from "./MovieList.module.css"
import noPic from "@/app/(public)/img/nopic.jpg"
import Image from "next/image"
import {IMovies} from "@/models/IMovies";

type movieProps = {
    pages: string,
    genres?: string | string[] | undefined
    filmName: string | string[] | undefined

}

export const MoviesList: FC<movieProps> = async ({pages, genres, filmName}) => {


    const movies:IMovies[] = filmName ? await searchMoviesByName(filmName, pages) : await getMovies(pages, genres)
    return (
        <div className={styles.wrapper}>
            {
                movies.length>0 ? movies.map(value => <MovieCard key={value.id} movie={value}/>) :
                    <div className={styles.no_results}><p>Sorry no films ware founded </p><Image src={noPic}
                                                                                                 className={styles.noResults}
                                                                                                 alt={"No films ware founded"}/>
                    </div>
            }

        </div>
    );
};