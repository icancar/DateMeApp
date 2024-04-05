import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};

  ngOnInit() : void {
  }

  constructor(public accountService:AccountService, private router: Router, private toastr: ToastrService) {
  }

  login() {
    console.log(this.model)
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.toastr.success("LogIn successfull!");
        this.router.navigateByUrl('/members')},
      error: err => {
        console.log(err);
        this.toastr.error(err.error);
      }
    })
  }

  logout() {
    this.accountService.logout();
    this.toastr.success("Successful log-out!")
    this.router.navigateByUrl('/');
  }
}
