import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource';

@Component({
  selector: 'app-header-element',
  templateUrl: './headerelement.component.html',
  styleUrls: ['./headerelement.component.scss']
})
export class HeaderElementComponent implements OnInit {

  @Input()
  public data: Resource;

  constructor() { }

  ngOnInit() {
  }


}
