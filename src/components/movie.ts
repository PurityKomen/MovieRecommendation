export class Movie {
        id: number = 0
        title: string = ''
        poster_path: string = ''
        overview: string = ''
        rating: string = ''
        name:string = ''
}

export interface GetMoviesResponse {
    results?: Movie[];
}