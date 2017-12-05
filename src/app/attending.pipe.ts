import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './family';

@Pipe({
  name: 'attending'
})
export class AttendingPipe implements PipeTransform {
  transform(members: Member[]) {
    return members.filter(member => member.attending);
  }
}
