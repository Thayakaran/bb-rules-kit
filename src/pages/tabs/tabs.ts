import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SignalsPage } from '../signals/signals';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SignalsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
