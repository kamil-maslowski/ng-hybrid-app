import 'core-js/proposals/reflect-metadata';
import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './ajs.module';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
