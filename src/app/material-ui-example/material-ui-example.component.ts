import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-ui-example',
  templateUrl: './material-ui-example.component.html',
  styleUrls: ['./material-ui-example.component.scss']
})
export class MaterialUiExampleComponent implements OnInit {

  email = new FormControl('some@', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
    this.email.markAsDirty();
    this.email.markAllAsTouched();
  }

}
