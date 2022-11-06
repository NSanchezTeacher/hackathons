import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService{

    private url = "http://localhost:5000/"
    constructor(private httpClient: HttpClient){}

    get(path){
        return this.httpClient.get(this.url + path);
    }

    post(path, data){
        this.httpClient.post(this.url + path, data).subscribe(data => {
            return data;
        });
    }

}