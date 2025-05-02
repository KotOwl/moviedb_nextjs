"use client"

import {FC} from "react";
import Link from "next/link";
import styles from "./pageButtons.module.css"
type buttonProps = {
    pages: string,
    genresParams: string | string[] | undefined
    film: string|string[]|undefined
}

export const PageButtonsComponent: FC<buttonProps> = ({pages, genresParams, film}) => {
    const prevPage = +pages > 1 ? +pages - 1 : 1;
    const nextPage = +pages + 1;
    const genres = genresParams || ''
    const filmName=film|| ''

    return (
        <div className={styles.pageButtonsWrapper}>

            {genres ? <div>
                <Link href={{pathname: `/movies/${prevPage}`, query: {genres}}}>
                    <button className={styles.pageButtons}>Prev</button>
                </Link>
                <Link href={{pathname: `/movies/${nextPage}`, query: {genres}}}>
                    <button className={styles.pageButtons}>Next</button>
                </Link></div>:filmName ? <div><Link href={{pathname: `/movies/${prevPage}`, query: {filmName}}}>
                <button className={styles.pageButtons}>Prev</button>
            </Link>
                <Link href={{pathname: `/movies/${nextPage}`, query: {filmName}}}>
                    <button className={styles.pageButtons}>Next</button>
                </Link></div>:
                <div>
                    <Link href={{pathname: `/movies/${prevPage}`,}}>
                        <button className={styles.pageButtons}>Prev</button>
                    </Link>
                    <Link href={{pathname: `/movies/${nextPage}`,}}>
                        <button className={styles.pageButtons}>Next</button>
                    </Link></div>}
            {

            }

        </div>
    );
};