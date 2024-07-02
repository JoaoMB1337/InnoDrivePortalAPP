import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    this.openInAppBrowser();
  }

  openInAppBrowser() {
    const browser = this.iab.create(
      'http://192.168.2.11:8000/',
      '_self',
      {
        location: 'no',
        hidden: 'no',
        clearcache: 'no',
        clearsessioncache: 'no',
        zoom: 'no',
        hardwareback: 'yes',
        
      }

    );
  }
  


}
