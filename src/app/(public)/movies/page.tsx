import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {WholeInfoAboutMovieComponent} from "@/components/WholeInfoAboutMovie/WholeInfoAboutMovieComponent";

type Props={
    searchParams:Promise<SearchParams>
}
const MoviePage:FC<Props> = async ({searchParams}) => {
    const {movieInfo}= await searchParams
    return (
        <>
            {
                <WholeInfoAboutMovieComponent movieStr={movieInfo}/>
            }
        </>
    );
};
export default MoviePage