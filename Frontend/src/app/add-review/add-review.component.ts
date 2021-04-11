import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileService } from '../mobileservice.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  MobileItem= {
    Name :'',
    Model:'',
    Storage:'',
    Version:'',
    Review:'',
    CPU:'',
    Price:'',
    imageUrl:''}
  mobileItem: any;
 
  constructor(private router:Router,private mobileService:MobileService) { }

  ngOnInit(): void {
    let Name = localStorage.getItem("editName");
    this.mobileService.getMobile(Name).subscribe((data: any)=>{
      this.mobileItem=JSON.parse(JSON.stringify(data));
  })
  }
  editMobile()
  {    
    this.mobileService.editMobile(this.mobileItem);   
    alert("Success");
    this.router.navigate(['mobiles']);
  }

}
