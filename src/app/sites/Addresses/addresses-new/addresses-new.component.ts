import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public formInstance: FormGroup;
  public FIELDS: typeof AddressFCN = AddressFCN;

  constructor(private formBuilder: FormBuilder) {
    this.formInstance = this.formBuilder.group({
      [this.FIELDS.COUNTRY]: ['', [Validators.required, Validators.minLength(2)]],
      [this.FIELDS.STATE]: ['', []],
      [this.FIELDS.CITY]: ['', [Validators.required, Validators.minLength(2)]],
      [this.FIELDS.STREET]: ['', []],
      [this.FIELDS.HOUSE_NUMBER]: ['', []],
      [this.FIELDS.HOME_NUMBER]: ['', []],
      [this.FIELDS.CODE]: ['', []],
      [this.FIELDS.STATUS]: ['', []],
    });
  }

  ngOnInit(): void {}
}
