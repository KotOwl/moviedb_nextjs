import {SearchParams} from "next/dist/server/request/search-params";
import {FC} from "react";
import {WholeInfoAboutMovieComponent} from "@/components/WholeInfoAboutMovie/WholeInfoAboutMovieComponent";

type Props={
    searchParams:Promise<SearchParams>
}

export const generateMetadata= async ()=>{


    return{
        title:"Film Information page ",
        description:'Page where user can read all information about film'
    }
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