export class Movie {
    original_title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;

    constructor(original_title:string,release_date:string,overview:string,poster_path:string,backdrop_path:string){
        this.original_title = original_title;
        this.release_date = release_date;
        this.overview = overview;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
    }

 
}
