import { Injectable } from '@angular/core';
import { EmplMan } from './empl-man.model';
import { HttpClient } from '@angular/common/http';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})
export class EmplManService {

  constructor(private http: HttpClient) { }
  //constructor() {}
  readonly baseUrl = 'http://localhost:46960/api/employees'
  formData:EmplMan = new EmplMan();
  empl_lst:EmplMan[];

  postEmployee() {
    //return;
    this.formData.id = this.createId();
    console.log(`insert ${this.formData.id}`);
    return this.http.post(this.baseUrl, this.formData);
  }

  putEmployee() {
    console.log(`update ${this.formData.id}`);
    return this.http.put(`${this.baseUrl}/${this.formData.id}`, this.formData);
  }

  delEmployee(id:string) {
    console.log(`delete ${id}`);
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.empl_lst = res as EmplMan[])
  }

  createId() {
    let id_Valid = Guid.create().toString();
    console.log(id_Valid);
    this.http.get(`${this.baseUrl}/${id_Valid}`)
    .subscribe(
      res => {
        this.createId();
      },
      err => {
        
      }
    );
    return id_Valid;
  }
}
