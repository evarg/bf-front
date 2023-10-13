import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export enum ClientFCN {
  COUNTRY = 'country',
  STATE = 'state',
  CITY = 'city',
  STREET = 'street',
  HOUSE_NUMBER = 'house_number',
  HOME_NUMBER = 'home_number',
  CODE = 'code',
  STATUS = 'status',
}

@Component({
  selector: 'app-clients-new',
  templateUrl: './clients-new.component.html',
  styleUrls: ['./clients-new.component.scss']
})
export class ClientsNewComponent implements OnInit {
  public form: FormGroup;
  public inputNames: typeof ClientFCN = ClientFCN;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      [this.inputNames.COUNTRY]: [
        'Poland',
        [Validators.required],
      ],
      [this.inputNames.STATE]: ['', []],
      [this.inputNames.CITY]: [
        '',
        [Validators.required, Validators.minLength(2)],
      ],
      [this.inputNames.STREET]: ['', []],
      [this.inputNames.HOUSE_NUMBER]: ['', []],
      [this.inputNames.HOME_NUMBER]: ['', []],
      [this.inputNames.CODE]: ['', []],
      [this.inputNames.STATUS]: ['', []],
    });
  }

  ngOnInit(): void {
  }

  isInputValid(inputName: ClientFCN): boolean {
    return (
      this.form.controls[inputName].invalid &&
      (this.form.controls[inputName].dirty ||
        this.form.controls[inputName].touched)
    );
  }
}
