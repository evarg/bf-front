import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/models/countries-data';

export enum AddressFCN {
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
  selector: 'app-addresses-new',
  templateUrl: './addresses-new.component.html',
  styleUrls: ['./addresses-new.component.scss'],
})
export class AddressesNewComponent implements OnInit {
  public form: FormGroup;
  public inputNames: typeof AddressFCN = AddressFCN;
  public countries:any = countries

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

  isInputValid(inputName: AddressFCN): boolean {
    return (
      this.form.controls[inputName].invalid &&
      (this.form.controls[inputName].dirty ||
        this.form.controls[inputName].touched)
    );
  }
}
