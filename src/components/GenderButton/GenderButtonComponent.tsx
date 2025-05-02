'use client'

import Link from "next/link";
import {IGenres} from "@/models/IGenres";
import {FC, useEffect, useState} from "react";
import './genreButtons.modules.css'

type buttonsProps = {
    pages: string,
    genresObject: IGenres
    genresFilter: string | string[] | undefined
}

export const GenderButtonComponent: FC<buttonsProps> = ({pages, genresObject, genresFilter}) => {
    const [genres, setGenres] = useState<string>('')


    const [buttonState, setButtonState] = useState<'active' | 'inactive'>('inactive')
    useEffect(() => {
        if (genresFilter) {
            if (!(Array.isArray(genresFilter))) {
                const genresArray = genresFilter.trim().split(/\s+/);
                const genreId = genresObject.id.toString();

                if (genresArray.includes(genreId)) {
                    setButtonState('active');
                    setGenres(genresArray.filter(value => value !== genreId).join(' '));

                } else {
                    setGenres([...genresArray, genreId].join(' '));
                    setButtonState('inactive');
                }
            }
        } else {
            setGenres(genresObject.id.toString());
            setButtonState('inactive');
        }


    }, [genresFilter, genresObject.id, buttonState]);

    const handler = () => {
        console.log(genresFilter);

    }
    return (
        <div>
            <Link href={{pathname: '/movies/' + pages, query: {genres}}}>
                <button className={`${buttonState} genreButtons`}>{genresObject.name}</button>
            </Link>
        </div>
    );
};