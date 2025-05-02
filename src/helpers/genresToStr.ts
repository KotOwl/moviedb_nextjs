import {getGenres} from "@/services/moviedb.api";

export const genresToStr = async (genresArray: number[]): Promise<string> => {
    const genresObj = await getGenres();
    const genresNamesArray: string[] = [];

    for (const genreId of genresArray) {
        const found = genresObj.find(value => value.id === genreId);
        if (found) {
            genresNamesArray.push(found.name);
        }
    }

    return genresNamesArray.join(', ');
};