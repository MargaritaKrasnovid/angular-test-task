import { Component, OnInit, Input } from '@angular/core';
import { pureFunctionV } from '@angular/core/src/render3/pure_function';

@Component({
  selector: 'app-footer-element',
  templateUrl: './footerelement.component.html',
  styleUrls: ['./footerelement.component.scss']
})
export class FooterElementComponent implements OnInit {

  @Input()
  public data;

  constructor() { }

  ngOnInit() {
  }

}
