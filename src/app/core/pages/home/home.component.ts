import { Component, OnInit, Input, Type } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource';
import { AssetService } from '../../services/asset.service';
import { ReleaseService } from '../../services/release.service';
import { Asset } from '../../entities/asset';
import { Release } from '../../entities/release';
import { AssetComponent } from '../asset/asset.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  public resources: Resource[];

  public assets: Asset[];
  public releases: Release[];

  constructor(
    private assetService: AssetService,
    private releaseService: ReleaseService
  ) { }

  ngOnInit() {
    this.getAssets();
    this.getRelease();
    this.getResources();
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

  public getResources(): void {
    this.resources = [...this.assets, ...this.releases];
  }
}
