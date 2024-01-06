import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { counterReducer } from '@fe-todo-angular/store'
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools'; // Import StoreDevtoolsModule


export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore({ counter: counterReducer }),
    provideAnimations(),
    provideClientHydration(),
    provideRouter(appRoutes),
    importProvidersFrom(TuiRootModule),
    provideStoreDevtools({
      maxAge: 25,
    }), // Use provideStoreDevtools() function here
  ],
};
