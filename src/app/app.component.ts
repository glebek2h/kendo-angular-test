import { Component } from '@angular/core';
import {products, sampleProducts} from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-kendo-grid-demo';
  public gridView: any[] = sampleProducts;
  public innerGrid: any[] = products;
}
