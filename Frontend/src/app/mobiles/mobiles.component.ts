import { Component } from '@angular/core';
import { MobileService } from '../mobileservice.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMobile } from '../mobilemodel';
@Component({
  selector: 'pm-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  pageTitle: string = 'Mobile List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  // mobiles=[{
  //   Name :'',
  //   Model:'',
  //   Storage:'',
  //   Version:'',
  //   Review:'',
  //   CPU:'',
  //   Price:'',
  //   imageUrl:''}]
  mobiles: IMobile[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private router: Router, private mobileService: MobileService, public _auth: AuthService) {

  }
  ngOnInit(): void {
    this.mobileService.getMobiles().subscribe((data: any) => {
      this.mobiles = JSON.parse(JSON.stringify(data));
    })
  }

  editMobile(mobile: any) {
    localStorage.setItem("editName", mobile._name.toString());
    this.router.navigate(['/edit/' + mobile._id]);

  }
  deleteMobile(mobile: any) {
    this.mobileService.deleteMobile(mobile._name)
      .subscribe((data: any) => {
        this.mobiles = this.mobiles.filter(e => e !== mobile);
      })


  }
}
