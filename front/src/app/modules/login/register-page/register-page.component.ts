import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
  PASSWORD_PATTERN,
} from 'src/app/core/interfaces/users/users.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm = this.formBuilder.group({});
  formSubscritions: Subscription = new Subscription();

  constructor(private formBuilder: UntypedFormBuilder,
    private toastService: ToastService,
    private router: Router,
    private authService: AuthService)
    {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new UntypedFormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(MIN_USERNAME_LENGTH),
          Validators.maxLength(MAX_USERNAME_LENGTH),
        ])
      ),
      password: new UntypedFormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(PASSWORD_PATTERN),
        ])
      ),
    });
  }

  register() {
    if (this.registerForm.valid) {
      // TOOD llamar a la API y en caso de haber un error capturarlo y mostrarselo al usuario con un toastr como en el login
      const registerData = this.registerForm?.value;

    this.formSubscritions.add(
      this.authService.register(registerData.username, registerData.password)
        .subscribe(
          (res: any) => {
            this.authService.setUser(res);
            this.router.navigateByUrl('/dashboard');
          },
          (err) => {
            this.toastService.presentToast(err.error);
          }
        )
    );
    }
  }
}
