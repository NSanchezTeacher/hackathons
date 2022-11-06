import { Component, OnInit } from '@angular/core';
import { HackathonsPresenter } from './hackathons.presenter';

@Component({
  selector: 'hackathons-component',
  templateUrl: './hackathons.component.html',
  styleUrls: ['./hackathons.component.css']
})


export class HackathonsComponent implements OnInit{
    title = 'hackathons';
    
 
    dialogData = {
      "header": "",
      "description": "",
      "display": false
    }

    constructor(public hackPresenter: HackathonsPresenter){}

    ngOnInit() {
      this.hackPresenter.getData();
      setTimeout(() =>{
            this.ngOnInit();
        }, 3000);
      
      
    }

    showDialog(ex) {
        this.dialogData.display = !this.dialogData.display;
        this.dialogData.header = ex.name;
        this.dialogData.description = ex.description;
    }



}
