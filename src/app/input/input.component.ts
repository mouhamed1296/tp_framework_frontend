import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputId = ''
  @Input() control = new FormControl()
  @Input() label = ''
  @Input() type = ''
  @Input() placeholder = ''
  @Input() class= ''
  errorMessages: Record<string, string> =  {
    required: "Ce Champ est requis",
    pattern: "Email invalide",
    minlength: "court",
    email: "Email invalide"
  }

  constructor() {

  }

  ngOnInit() {

  }
}
