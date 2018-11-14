import { Injectable } from '@angular/core';
import { ASSETS } from 'src/app/datamock/mock-assets';
import { Observable, of } from 'rxjs';
import { Asset } from '../entities/asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  public getAsset(): Observable<Asset[]> {
    return of(ASSETS);
  }
}
