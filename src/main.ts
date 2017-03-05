import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
// The app module factory produced by the static offline compiler
// import { AppModuleNgFactory } from './app/app.module.ngfactory';

if (environment.production) {
  enableProdMode();
}
// Launch static AOT with the app module factory.
// Launch with dynamic JIT
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(success => console.log(`Bootstrap success`))
    .catch(err => console.error(err));
