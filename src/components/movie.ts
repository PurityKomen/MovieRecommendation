export class Movie {
        id: number = 0
        title: string = ''
        poster_path: string = ''
        overview: string = ''
        rating: string = ''
        name:string = ''
        vote_average:string = ''
        genres:any = ''
}

export interface GetMoviesResponse {
    results?: Movie[];
}

export interface Trailer {
    id?: string;
    key?: string;
    name?: string;
    site?: string;
}

export interface TrailerResponse {
    results?: Trailer[];
}   
