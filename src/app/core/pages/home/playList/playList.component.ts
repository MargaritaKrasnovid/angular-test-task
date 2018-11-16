import { Component, Input, AfterContentInit, ContentChildren, QueryList, TemplateRef, ContentChild, OnInit } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { AssetComponent } from '../../asset/asset.component';

@Component({
  selector: 'app-play-list',
  templateUrl: './playList.component.html',
  styleUrls: ['./playList.component.scss']
})
export class PlayListComponent implements OnInit {
  @Input()
  public data;

  constructor() { }

  ngOnInit() {
  }
}
