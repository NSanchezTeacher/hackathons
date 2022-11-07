import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";


@Injectable()
export class HackathonsPresenter{

    configuration: any = [];
    groups: Array<any> = [];
    headers = [
        "Grupo"
      ]
    constructor(private httpService: HttpService){}

    getData(){
        this.httpService.get("getData").subscribe(data => {
            this.configuration= data;
            if(this.groups.length == 0){
                this.groups = this.configuration;
                this.groups[0].exercices.forEach(ex => {
                    this.headers.push(ex.name);
              
                }); 
            }
            else{
                this.replaceButtons();
            }
            
        });

    }
    
    replaceButtons(){

        for(var i = 0; i < this.groups.length; i++){
            for(var j = 0; j<this.groups[i].exercices.length; j++){
                if(this.groups[i].exercices[j].resolved != this.configuration[i].exercices[j].resolved)
                    this.groups[i].exercices[j].resolved = this.configuration[i].exercices[j].resolved;
            }
        } 
    }

}