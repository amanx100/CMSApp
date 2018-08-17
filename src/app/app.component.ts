import { Component } from '@angular/core';
import {CmsConfigService} from './service/cms-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public configs: CmsConfigService) {}
    color = 'primary';
    mode = 'determinate';
    value = 100;
}
