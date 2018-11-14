import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { AssetService } from '../../../services/asset.service';
import { Resource } from 'src/app/shared/interfaces/resource';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-play-list',
  templateUrl: './playList.component.html',
  styleUrls: ['./playList.component.scss']
})
export class PlayListComponent implements AfterContentInit {

  @ContentChildren(BodyComponent)
  resources: QueryList<BodyComponent>;

  constructor() { }

  ngAfterContentInit() {
    this.resources.forEach(item => item.getResource());
    console.log(this.resources);
  }
}
