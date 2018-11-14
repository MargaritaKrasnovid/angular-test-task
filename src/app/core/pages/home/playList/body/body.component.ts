import { Component, OnInit, Input, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { AssetService } from 'src/app/core/services/asset.service';
import { Asset } from '../../../../entities/asset';
import { ReleaseService } from 'src/app/core/services/release.service';
import { Release } from 'src/app/core/entities/release';
import { Resource } from 'src/app/shared/interfaces/resource';
import { AssetComponent } from '../../../asset/asset.component';
import { ReleaseComponent } from '../../../release/release.component';
import { PlayListComponent } from '../playList.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements  OnInit {

  public assets: Asset[];
  public releases: Release[];
  public resources;

  constructor(
    private assetService: AssetService,
    private releaseService: ReleaseService
  ) { }

  ngOnInit() {
    this.getAssets();
    this.getRelease();
    this.getResource();
  }

  public getAssets(): void {
    this.assetService.getAsset().subscribe((assets: Asset[]) => {
      this.assets = assets;
    });
  }

  public getRelease(): void {
    this.releaseService.getRelease().subscribe((releases: Release[]) => {
      this.releases = releases;
    });
  }

  public getResource(): void {
    this.resources = [...this.assets, ...this.releases];
  }

}
