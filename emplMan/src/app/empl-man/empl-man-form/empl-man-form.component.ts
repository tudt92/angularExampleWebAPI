import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmplMan } from 'src/app/shared/empl-man.model';
import { EmplManService } from 'src/app/shared/empl-man.service';

@Component({
  selector: 'app-empl-man-form',
  templateUrl: './empl-man-form.component.html',
  styles: [
  ]
})
export class EmplManFormComponent implements OnInit {

  constructor(public service:EmplManService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    if (this.service.formData.id === 'new') {
      this.insEmpl(form);
    } else this.updEmpl(form);
  }

  insEmpl(form:NgForm) {
    this.service.postEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Thêm nhân viên mới thành công', 'Save successful!!!')
      },
      err => {
        console.log(err);
      }
    );
  }

  updEmpl(form:NgForm) {
    this.service.putEmployee().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Đã cập nhật thông tin nhân viên', 'Update successful!!!')
      },
      err => {
        console.log(err);
      }
    );
  }

  resetForm(form:NgForm) {
    form.form.reset();
    this.service.formData = new EmplMan();
  }

}
