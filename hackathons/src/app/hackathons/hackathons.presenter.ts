import { Injectable } from "@angular/core";
import { HttpService } from "../services/http.service";


@Injectable()
export class HackathonsPresenter{

    configuration: any = {};
    groups: Array<any> = [];
    headers = [
        "Grupo"
      ]
    constructor(private httpService: HttpService){}

    getData(){
        this.headers = ["Grupo"]
        this.groups = []
        this.httpService.get("getData").subscribe(data => {
            this.configuration= data;
            this.initData();
            this.groups[0].exercices.forEach(ex => {
                this.headers.push(ex.name);
              
            }); 
        });

    }
    

    initData(){
        for(var i = 1; i<=this.configuration["groups"]; i++){
            this.groups.push({
                "group": "Grupo " + i,
                "groupId": "GR" + i,
                "exercices": this.configuration["exercices"]
                });
            
        }
    }

}