import { Component, OnInit } from '@angular/core';
import { IMobile } from '../mobilemodel';
import { MobileService } from '../mobileservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmobiles',
  templateUrl: './newmobiles.component.html',
  styleUrls: ['./newmobiles.component.css']
})
export class NewMobilesComponent implements OnInit {

  constructor(private mobileService: MobileService,private router: Router){  } 
  mobileItem= {
     Name :'',
     Model:'',
     Storage:'',
     Version:'',
     Review:'',
     CPU:'',
     Price:'',
     imageUrl:''}
 // employeeItem: IEmployee;
  ngOnInit() {
  }
  AddMobiles()
  {    
    this. mobileService.newMobile(this.mobileItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
