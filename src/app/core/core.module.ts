import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './pages/playList';
import { AssetComponent, ReleaseComponent } from './pages/playList/body';

@NgModule({
  declarations: [
    PlayListComponent,
    AssetComponent,
    ReleaseComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
