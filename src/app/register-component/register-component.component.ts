import { Component, OnInit } from '@angular/core';
import { RegisterFormDefinition } from '../forms-definitions/register.form-definition';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmationValidator } from '../validators/password-confirmation.validator';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss'],
})
export class RegisterComponentComponent implements OnInit {
  // public registerForm: FormGroup;
  public RegisterFD: typeof RegisterFormDefinition = RegisterFormDefinition;
  public registerForm = this.formBuilder.group(
    {
      [this.RegisterFD.NAME]: ['', [Validators.required]],
      [this.RegisterFD.EMAIL]: ['', [Validators.required, Validators.email]],
      [this.RegisterFD.PASSWORD]: [
        '',
        [Validators.required, Validators.minLength(4)],
      ],
      [this.RegisterFD.PASSWORD_CONFIRM]: [
        '',
        [Validators.required, Validators.minLength(4)],
      ],
    },
    {
      validator: PasswordConfirmationValidator(
        this.RegisterFD.PASSWORD,
        this.RegisterFD.PASSWORD_CONFIRM
      ),
    }
  );

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
}
