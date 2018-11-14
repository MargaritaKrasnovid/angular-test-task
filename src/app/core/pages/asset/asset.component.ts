import { Component, OnInit, Output, EventEmitter, Input, ContentChild, ViewChild } from '@angular/core';
import { Asset } from '../../entities/asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input()
  public asset: Asset;

  constructor() {
  }

  ngOnInit() {
  }

}
