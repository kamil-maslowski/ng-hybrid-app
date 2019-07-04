import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import whatIdLikeToBeComponent from './components/whatIdLikeToBe/whatIdLikeToBe.component';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        whatIdLikeToBeComponent
    ],
    entryComponents: [
        whatIdLikeToBeComponent
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['app']);
    }
}
