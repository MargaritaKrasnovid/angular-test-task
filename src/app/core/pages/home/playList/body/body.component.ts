import { Component, OnInit, Input, AfterContentInit, Type } from '@angular/core';
import { Asset } from 'src/app/core/entities/asset';
import { Resource } from 'src/app/shared/interfaces/resource';
import { Release } from 'src/app/core/entities/release';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input()
  public data: Resource;
  public asset: Asset;
  public releases: Release;

  constructor() { }

  ngOnInit() {

  }

}
