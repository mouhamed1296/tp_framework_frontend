import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/User';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers: User[], searchTerm: string): User[] {
    searchTerm = searchTerm.toLowerCase()
    return allUsers.filter(user => user.etat == 1 &&
       (user.nom.toLowerCase().includes(searchTerm) || user.prenom.toLowerCase().includes(searchTerm)
        || user.email.toLowerCase().includes(searchTerm))
      );
  }

}
