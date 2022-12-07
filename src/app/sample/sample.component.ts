import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getSampleUser().subscribe(user => {
      console.log(user);
    })
  }
}
