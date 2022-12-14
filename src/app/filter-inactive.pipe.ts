import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'filterInactive'
})
export class FilterInactivePipe implements PipeTransform {

  transform(allUsers: User[]): User[] {
    return allUsers.filter(user => user.etat == 0 && user.matricule != localStorage.getItem('matricule'));
  }

}
