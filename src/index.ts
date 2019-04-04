import * as angular from 'angular';

import { AppComponent } from './components/app/app.component';
import { WhatAmIComponent } from './components/whatAmI/whatAmI.component';

angular
    .module("app",[])
    .component(AppComponent.selector, new AppComponent())
    .component(WhatAmIComponent.selector, new WhatAmIComponent());

angular
    .bootstrap(document, ['app']);
