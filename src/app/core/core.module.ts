import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './pages/home/playList/playList.component';
import { AssetComponent, } from './pages/asset/asset.component';
import { ReleaseComponent } from './pages/release/release.component';
import { BodyComponent } from './pages/home/playList/body/body.component';
import { HeaderElementComponent } from './pages/home/playList/headerelement/headerElement.component';
import { FooterElementComponent } from './pages/home/playList/footerelement/footerElement.component';
import { AssetService } from './services/asset.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    PlayListComponent,
    AssetComponent,
    ReleaseComponent,
    BodyComponent,
    HeaderElementComponent,
    FooterElementComponent,
    HomeComponent],

  providers: [AssetService],
  exports: [AssetComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
