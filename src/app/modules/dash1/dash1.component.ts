import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillsdropdownService } from 'src/app/services/skillsdropdown.service';
import { ManagernameService } from 'src/app/services/managername.service';
import {HttpClient} from '@angular/common/http'
import { Skill} from './skills';

@Component({
  selector: 'app-dash1',
  templateUrl: './dash1.component.html',
  styleUrls: ['./dash1.component.scss']
  
})

export class Dash1Component implements OnInit {
  // manager!: Manager[];

  Skills: any = [];

  selectedManager: any;

  managerSet: any[] = [];

  skillSet: any[] = [];

  selectedSkill: any[] = [];

  javaQuestions: any[] = [];
  
  ski: any [] = [];

  constructor(
    private skillsdropdownservice: SkillsdropdownService,
    private managernameService: ManagernameService
  

  ) {

  }

  ngOnInit() {
    this.reloadData();
    this.loadManagerNames();

  }

  reloadData() {

    console.log('hi from Client');

    this.skillsdropdownservice.getskillsList().subscribe(data => {
      this.skillSet = data;
  
      console.log(this.skillSet);

      console.log('Users:' + JSON.stringify(this.selectedSkill));

   

    });

   

  }

  loadManagerNames() {
    this.managernameService.getManagerNames().subscribe(data => {
      this.managerSet = data;
    });

  }
  submitForm() {
    //console.log('Selected Manager:', this.selectedManager); console.log('Selected Skills:', this.selectedSkill); // Perform any data submission actions }
    for(let g of this.selectedSkill){

    this.ski.push(g.skills)

  }

  this.skillsdropdownservice.postskillsList(this.ski).subscribe(response =>{

    console.log(response)

 

  });
  }
}
