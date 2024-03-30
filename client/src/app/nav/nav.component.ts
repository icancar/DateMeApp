import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  model: any = {};

  ngOnInit() : void {
  }

  constructor(public accountService:AccountService) {
  }

  login() {
    console.log(this.model)
    this.accountService.login(this.model).subscribe({
      error: err => console.log(err)
    })
  }

  logout() {
    console.log("LogOut");
    this.accountService.logout();
  }
}
