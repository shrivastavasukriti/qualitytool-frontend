import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-accordian-header',
  templateUrl: './accordian-header.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
  `]
})
export class AccordianHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
