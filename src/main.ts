import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
// The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app/app.module.ngfactory';

// Enable production mode unless running locally
if (!/localhost/.test(document.location.host))  {
  enableProdMode();
}
// Launch static AOT with the app module factory.
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
// Launch with dynamic JIT
platformBrowserDynamic().bootstrapModule(AppModule);
