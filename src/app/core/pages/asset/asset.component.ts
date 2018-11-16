import { Component, OnInit, Input} from '@angular/core';
import { Asset } from '../../entities/asset';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  @Input()
  public asset: Asset;
  public main_artists_names: string[];
  public genres_names: string[] = [];
  public featured_artists_names: string[] = [];

  constructor() {
  }

  ngOnInit() {
    this.getGenresName();
    this.getMainArtistName();
    this.getFeaturedArtistsName();
  }

  public getGenresName() {
    this.genres_names = this.asset.genres.map(x => x.name);
  }

  public getMainArtistName() {
    this.main_artists_names = this.asset.main_artists.map(x => x.name);
  }

  public getFeaturedArtistsName() {
    this.featured_artists_names = this.asset.featured_artists.map(x => x.name);
  }
}
