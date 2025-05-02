import axios from "axios";
import {IGenres, IGenresResponse} from "@/models/IGenres";
import {IMovies} from "@/models/IMovies";
import {BaseResponseType} from "@/models/BaseResponseType";


const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmI2Yjg5MjQ0ZDljY2Q5ZDQ0NThiMDBiNWMwN2ViNyIsIm5iZiI6MTc0NDk4MjIwOS43MTUwMDAyLCJzdWIiOiI2ODAyNTBjMTJlODk1OGYwZjk5OTgzYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ljCeozSUNEWn1VeoeakRRpal3mPJQIyAAdb7M6cKOcc',
        'accept': 'application/json'
    }

});

export const getMovies = async (page: string, genreIds: string | string[] | undefined): Promise<IMovies[]> => {
    const genresParam = Array.isArray(genreIds)
        ? genreIds.join('%20')
        : (genreIds?.split(' ').join(',')) ?? '';

    const {data} = await axiosInstance.get<
        BaseResponseType & { results: IMovies[] }
    >(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genresParam}`
    );

    return data.results;


}

export const getGenres = async (): Promise<IGenres[]> => {
    const {data} = await axiosInstance.get<IGenresResponse>('/genre/movie/list?language=en')

    return data.genres
}
export const searchMoviesByName = async (query: string | string[], page: string): Promise<IMovies[]> => {
    const normalizedQuery = Array.isArray(query) ? query.join(" ") : query;
    const {data} = await axiosInstance.get<BaseResponseType & {
        results: IMovies[]
    }>("/search/movie?query=" + normalizedQuery + "&include_adult=false&language=en-US&page=" + page)

    return data.results
}