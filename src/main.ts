import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent, {
//   providers: []
// }).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule);