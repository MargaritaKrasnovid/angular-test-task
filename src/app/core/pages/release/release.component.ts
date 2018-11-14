import { Component, OnInit, Input } from '@angular/core';
import { Release } from '../../entities/release';
import { RELEASES } from 'src/app/datamock/mock-release';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.scss']
})
export class ReleaseComponent implements OnInit {
  @Input()
  public release: Release;

  constructor() { }

  ngOnInit() {
  }

  public getRelease(): Observable<Release[]> {
    return of(RELEASES);
  }

}
