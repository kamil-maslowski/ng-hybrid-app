import * as angular from 'angular';

import { AppComponent } from './components/app/app.component';
import { WhatAmIComponent } from './components/whatAmI/whatAmI.component';
import { downgradeComponent } from '@angular/upgrade/static';
import WhatIdLikeToBeComponent from './components/whatIdLikeToBe/whatIdLikeToBe.component';

angular
    .module("app",[])
    .component(AppComponent.selector, new AppComponent())
    .component(WhatAmIComponent.selector, new WhatAmIComponent())
    .directive(
        'whatIdLikeToBe',
        downgradeComponent({ component: WhatIdLikeToBeComponent })
    );
