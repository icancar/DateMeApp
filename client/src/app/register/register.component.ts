import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService) {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: () => console.log("User successfully registred!"),
      error: err => console.log(err)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
