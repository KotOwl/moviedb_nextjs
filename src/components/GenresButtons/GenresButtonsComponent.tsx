"use client"
import {FC, useEffect, useState} from "react";
import {getGenres} from "@/services/moviedb.api";
import {IGenres} from "@/models/IGenres";
import {GenderButtonComponent} from "@/components/GenderButton/GenderButtonComponent";
import styles from './genreButtons.module.css'

type buttonsProps={
        pages:string,
        genresFilter:string|string[]|undefined
}

export const GenresButtonsComponent:FC<buttonsProps> = ({pages,genresFilter}) => {

    const [genres, setGenres] = useState<IGenres[]>([])
    useEffect(() => {
        getGenres().then(res => setGenres(res))
    }, []);

    return (
        <div className={styles.buttonWrapper} >
            {
                genres.map(genre=><GenderButtonComponent key={genre.id} genresFilter={genresFilter}pages={pages} genresObject={genre}/>)
            }
        </div>
    );
};