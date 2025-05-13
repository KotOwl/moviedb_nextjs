import {FC} from "react";
import {PageButtonsComponent} from "@/components/PageButtons/PageButtonsComponent";
import {GenresButtonsComponent} from "@/components/GenresButtons/GenresButtonsComponent";
import {SearchParams} from "next/dist/server/request/search-params";
import {MoviesList} from "@/app/(public)/movies/[pages]/MoviesList";

type Props ={
    params:Promise<{pages:string}>
    searchParams:Promise<SearchParams>
}

export const generateMetadata= async ({params}:Props)=>{
    const {pages} = await params

    return{
        title:"Film by name page: " + pages,
        description:'Page where user can find film by name'
    }
}

const PagesPage:FC<Props> = async ({params,searchParams}) => {
    const {pages}= await params
    const {genres}=await searchParams
    const {filmName}=await searchParams



    return (
        <>
            {filmName? <div></div> : <div><GenresButtonsComponent pages={pages} genresFilter={genres}/></div>}
            <MoviesList filmName={filmName} pages={pages} genres={genres}/>

            <PageButtonsComponent pages={pages} film={filmName} genresParams={genres} ></PageButtonsComponent>

        </>
    );
};
export default PagesPage