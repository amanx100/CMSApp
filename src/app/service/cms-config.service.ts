import { Injectable } from '@angular/core';

@Injectable()
export class CmsConfigService {

  MAIN_URL: String =  'http://localhost/CMSApp';
  constructor() { }
  Loading = false;
}
