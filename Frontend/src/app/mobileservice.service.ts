import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  // editMobile(mobileItem: any) {
  //   throw new Error('Method not implemented.');
  // }
  // getMobile(Name: string | null) {
  //   throw new Error('Method not implemented.');
  // }
  item = {
    Name: '',
    Model: '',
    Storage: '',
    Version: '',
    Review: '',
    CPU: '',
    Price: '',
    imageUrl: ''
  }
  constructor(private http: HttpClient) { }
  getMobile(id: any) {
    return this.http.get<any>("http://localhost:3000/" + id);
  }
  getMobiles() {
    return this.http.get("http://localhost:3000/mobiles");
  }

  newMobile(item: any) {
    return this.http.post("http://localhost:3000/insert", { "mobile": item })
      .subscribe(data => { console.log(data) })
  }
  deleteMobile(id: any) {

    return this.http.delete("http://localhost:3000/remove/" + id)

  }
  editMobile(mobile: any) {
    return this.http.put<any>("http://localhost:3000/update", mobile);
  }
}
