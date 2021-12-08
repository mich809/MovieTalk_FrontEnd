export class MovieTrailer {
    public id: number;
    public results: Array<any>;
    public name: string;
    public url: any;
    public key: string;


    constructor(id : number , results : [] , name: string, url:any , key:string){
        this.id = id
        this.results = results
        this.name = name
        this.url = url
        this.key = key
    }
}
