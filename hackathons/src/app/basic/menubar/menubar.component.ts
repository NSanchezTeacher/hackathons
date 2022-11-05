import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[] = [];
    constructor() { }
    ngOnInit() {
        this.items = [
            {
                label: 'Hackathons',
                routerLink:  ['/hackathons']
                
            },
            
        ];
    }

}
