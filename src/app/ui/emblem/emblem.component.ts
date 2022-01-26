import {Component, Input} from '@angular/core';

@Component({
  selector: 'emblem-ui',
  templateUrl: './emblem.component.html',
  styleUrls: ['./emblem.component.scss']
})
export class EmblemComponent {

  @Input() url: string | null = null;

}
