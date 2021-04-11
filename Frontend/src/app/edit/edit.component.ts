import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMobile } from '../mobilemodel';
import { MobileService } from '../mobileservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private mobileService: MobileService, private router: Router, private activatedRoute: ActivatedRoute) { }

  mobileItem: IMobile = new IMobile("", "", "", "", "", "", "", 0, "");

  EditdMobiles(){
    this.mobileService.editMobile(this.mobileItem).subscribe(status=>{
      if(status.message=="success"){
        this.router.navigate(['/mobiles'])
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.mobileService.getMobile(params.id).subscribe(data=> {
        this.mobileItem = data;
      })
    })
  }

}
