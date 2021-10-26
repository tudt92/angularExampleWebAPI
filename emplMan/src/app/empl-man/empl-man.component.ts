import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmplMan } from '../shared/empl-man.model';
import { EmplManService } from '../shared/empl-man.service';

@Component({
  selector: 'app-empl-man',
  templateUrl: './empl-man.component.html',
  styles: [
  ]
})
export class EmplManComponent implements OnInit {

  constructor(public service: EmplManService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:EmplMan) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  delEmp(id:string) {
    if (confirm("Bạn có muốn xoá thông tin của nhân viên này không?")){
    this.service.delEmployee(id).subscribe (
      res => {
        this.service.refreshList();
        this.toastr.success("Đã xoá thông tin nhân viên", "Delete successful!!!")
      },
      err => {console.log(err);}
    );}
  }

}
