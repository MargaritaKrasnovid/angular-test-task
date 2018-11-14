import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/shared/interfaces/resource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input()
  public resources: Resource[];

  constructor() { }

  ngOnInit() {
    // this.initResourses();
  }

  // public initResourses(): void {
  //   this.resources = [...this.assets, ...this.releases];
  //   console.log(this.resources);
  // }

}
