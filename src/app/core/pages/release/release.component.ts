import { Component, OnInit, Input } from '@angular/core';
import { Release } from '../../entities/release';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  @Input()
  public release: Release;
  public main_artists_names: string[];
  public genres_names: string[] = [];
  public featured_artists_names: string[] = [];

  constructor() { }

  ngOnInit() {
    this.getFeaturedArtistsName();
    this.getGenresName();
    this.getMainArtistName();
  }
  public getGenresName() {
    this.genres_names = this.release.genres.map(x => x.name);
  }

  public getMainArtistName() {
    this.main_artists_names = this.release.main_artists.map(x => x.name);
  }

  public getFeaturedArtistsName() {
    this.featured_artists_names = this.release.featured_artists.map(x => x.name);
  }

}
