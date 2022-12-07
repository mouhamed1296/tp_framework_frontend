import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() inputId = ''
  @Input() control = new FormControl()
  @Input() options: {value: string, description: string}[] = [];
  @Input() label = ''

  constructor() {

  }

  ngOnInit() {

  }
}
