import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Release } from '../entities/release';
import { RELEASES } from 'src/app/datamock/mock-release';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  constructor() { }

  public getRelease(): Observable<Release[]> {
    return of(RELEASES);
  }
}
